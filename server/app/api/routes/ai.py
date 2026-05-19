from fastapi import APIRouter

from app.services.ai_engine import (
    adjust_difficulty
)

router = APIRouter()


@router.post("/analyze")
async def analyze(data: dict):

    difficulty = adjust_difficulty(data)

    return {
        "new_difficulty": difficulty
    }