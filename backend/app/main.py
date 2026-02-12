import asyncio
import time
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routers.chat import router as chat_router
from app.services.dynamo import create_table_if_not_exists


@asynccontextmanager
async def lifespan(app: FastAPI):
    for attempt in range(3):
        try:
            create_table_if_not_exists()
            break
        except Exception as e:
            if attempt == 2:
                raise
            print(f"DynamoDB not ready (attempt {attempt + 1}/3), retrying in 2s...")
            await asyncio.sleep(2)
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_methods=["POST"],
    allow_headers=["*"],
)

app.include_router(chat_router)
