from fastapi import APIRouter

from app.database.schemas import GameSession

from app.database.mongodb import (
    game_sessions_collection
)

router = APIRouter()


@router.post("/submit")
async def submit_game(
    session: GameSession
):

    result = await game_sessions_collection.insert_one(
        session.model_dump()
    )

    return {
        "message": "Game saved",
        "id": str(result.inserted_id)
    }