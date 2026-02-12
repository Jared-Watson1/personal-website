import time
import threading


_sessions: dict[str, dict] = {}
_lock = threading.Lock()


def _cleanup_expired():
    now = time.time()
    expired = [k for k, v in _sessions.items() if now > v["ttl"]]
    for k in expired:
        del _sessions[k]


async def get_session(session_id: str) -> dict | None:
    with _lock:
        _cleanup_expired()
        session = _sessions.get(session_id)

    if session is None:
        return None

    if time.time() > session["ttl"]:
        return None

    return {
        "session_id": session["session_id"],
        "messages": list(session["messages"]),
        "query_count": session["query_count"],
        "created_at": session["created_at"],
        "ttl": session["ttl"],
    }


async def put_session(session: dict):
    with _lock:
        _sessions[session["session_id"]] = {
            "session_id": session["session_id"],
            "messages": list(session["messages"]),
            "query_count": session["query_count"],
            "created_at": session["created_at"],
            "ttl": session["ttl"],
        }
