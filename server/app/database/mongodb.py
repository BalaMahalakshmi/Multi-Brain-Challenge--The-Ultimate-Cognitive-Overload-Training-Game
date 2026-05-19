from motor.motor_asyncio import AsyncIOMotorClient

from app.core.config import (
    MONGO_URI,
    DATABASE_NAME
)

client = AsyncIOMotorClient(MONGO_URI)

db = client[DATABASE_NAME]


users_collection = db["users"]

game_sessions_collection = db["game_sessions"]

analytics_collection = db["analytics"]

leaderboard_collection = db["leaderboard"]