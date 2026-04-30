from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_reports() -> dict:
    return {"items": [], "message": "Implement pagination + DB integration."}
