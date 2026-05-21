from fastapi import APIRouter

from app.database.mongodb import (
    game_sessions_collection
)

router = APIRouter()

@router.get("/")
async def leaderboard():

    scores = game_sessions_collection.find().sort(
        "score",
        -1
    ).limit(10)

    results = []

    async for score in scores:
        score["_id"] = str(score["_id"])
        results.append(score)

    return results