from fastapi import APIRouter
from fastapi import HTTPException

from bson import ObjectId

from app.models.game_model import GameSession

from app.database.mongodb import (
    game_sessions_collection
)

from app.services.scoring_service import (
    calculate_score
)

router = APIRouter()


# ==========================================
# SUBMIT GAME SCORE
# ==========================================

@router.post("/submit")
async def submit_score(session: GameSession):

    # Convert model to dictionary
    session_data = session.model_dump()

    # Auto calculate final score
    final_score = calculate_score({
        "memory_accuracy":
            session.recall_power,

        "rhythm_accuracy":
            session.sync_rating,

        "reaction_speed":
            session.reaction_time
    })

    # Save calculated score
    session_data["score"] = final_score

    # Insert into MongoDB
    result = await game_sessions_collection.insert_one(
        session_data
    )

    return {
        "message": "Score submitted successfully",
        "session_id": str(result.inserted_id),
        "final_score": final_score
    }


# ==========================================
# GET USER SCORES
# ==========================================

@router.get("/user/{user_id}")
async def get_user_scores(user_id: str):

    scores_cursor = game_sessions_collection.find({
        "user_id": user_id
    }).sort("score", -1)

    scores = []

    async for score in scores_cursor:

        score["_id"] = str(score["_id"])

        scores.append(score)

    return {
        "user_id": user_id,
        "total_sessions": len(scores),
        "scores": scores
    }


# ==========================================
# GET TOP GLOBAL SCORES
# ==========================================

@router.get("/top")
async def get_top_scores():

    scores_cursor = (
        game_sessions_collection
        .find()
        .sort("score", -1)
        .limit(10)
    )

    top_scores = []

    async for score in scores_cursor:

        score["_id"] = str(score["_id"])

        top_scores.append(score)

    return {
        "top_scores": top_scores
    }


# ==========================================
# GET SINGLE GAME SESSION
# ==========================================

@router.get("/session/{session_id}")
async def get_single_session(
    session_id: str
):

    session = await (
        game_sessions_collection.find_one({
            "_id": ObjectId(session_id)
        })
    )

    if not session:
        raise HTTPException(
            status_code=404,
            detail="Session not found"
        )

    session["_id"] = str(session["_id"])

    return session


# ==========================================
# DELETE GAME SESSION
# ==========================================

@router.delete("/delete/{session_id}")
async def delete_session(
    session_id: str
):

    result = await (
        game_sessions_collection.delete_one({
            "_id": ObjectId(session_id)
        })
    )

    if result.deleted_count == 0:
        raise HTTPException(
            status_code=404,
            detail="Session not found"
        )

    return {
        "message": "Session deleted successfully"
    }