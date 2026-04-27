from fastapi import FastAPI
from app.api.v1.router import api_router
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME, version="1.0.0")
app.include_router(api_router, prefix="/api/v1")

@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
