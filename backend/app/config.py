import json
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    ANTHROPIC_API_KEY: str
    DYNAMODB_ENDPOINT: str = "http://dynamodb-local:8000"
    DYNAMODB_TABLE: str = "chat-sessions"
    SESSION_TTL_MINUTES: int = 20
    MAX_QUERIES: int = 3
    ALLOWED_ORIGINS: str = '["http://localhost:3000"]'

    @property
    def allowed_origins_list(self) -> list[str]:
        return json.loads(self.ALLOWED_ORIGINS)

    class Config:
        env_file = ".env"


settings = Settings()
