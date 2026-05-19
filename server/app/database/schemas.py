from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class UserRegister(BaseModel):
    username: str
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class GameSession(BaseModel):
    user_id: str
    mode: str
    score: int
    focus_index: int
    recall_accuracy: int
    sync_rating: int
    reaction_time: float
    difficulty_level: int
    created_at: datetime = datetime.utcnow()