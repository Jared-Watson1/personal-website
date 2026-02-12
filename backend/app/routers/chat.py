import time
import uuid

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.config import settings
from app.services import sessions, llm

router = APIRouter()


class ChatRequest(BaseModel):
    session_id: str | None = None
    message: str


class ChatResponse(BaseModel):
    session_id: str
    response: str
    query_count: int
    limit_reached: bool


LIMIT_MESSAGE = (
    "You've hit the question limit which I have arbitrarily set. "
    "Tokens are expensive. If you want to keep the conversation going, "
    "shoot me an email at jaredswatson55@gmail.com."
)


@router.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    session = None
    if request.session_id:
        session = await sessions.get_session(request.session_id)

    if session is None:
        now = int(time.time())
        session = {
            "session_id": request.session_id or str(uuid.uuid4()),
            "messages": [],
            "query_count": 0,
            "created_at": now,
            "ttl": now + (settings.SESSION_TTL_MINUTES * 60),
        }

    if session["query_count"] >= settings.MAX_QUERIES:
        return ChatResponse(
            session_id=session["session_id"],
            response=LIMIT_MESSAGE,
            query_count=session["query_count"],
            limit_reached=True,
        )

    session["messages"].append({"role": "user", "content": request.message})
    session["query_count"] += 1

    assistant_text = await llm.get_chat_response(session["messages"])

    session["messages"].append({"role": "assistant", "content": assistant_text})
    await sessions.put_session(session)

    return ChatResponse(
        session_id=session["session_id"],
        response=assistant_text,
        query_count=session["query_count"],
        limit_reached=session["query_count"] >= settings.MAX_QUERIES,
    )
