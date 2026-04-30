from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    PROJECT_NAME: str = "Keyword & Content Analysis Suite API"
    DATABASE_URL: str = "postgresql+psycopg://postgres:postgres@localhost:5432/seo_suite"
    REDIS_URL: str = "redis://localhost:6379/0"
    OPENAI_API_KEY: str = ""
    MAX_COMPETITOR_URLS: int = 10


settings = Settings()
