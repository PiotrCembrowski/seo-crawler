from fastapi import APIRouter

router = APIRouter()


@router.get("/plans")
def list_plans() -> dict:
    return {
        "plans": [
            {"name": "Free", "monthly": 0, "limits": {"reports": 10}},
            {"name": "Pro", "monthly": 79, "limits": {"reports": 500}},
            {"name": "Agency", "monthly": 299, "limits": {"reports": 5000}},
        ]
    }
