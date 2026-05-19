from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional


class UserBase(BaseModel):
    username: str
    email: EmailStr


class UserRegister(UserBase):
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserInDB(UserBase):
    id: Optional[str] = None

    brain_rank: str = "Beginner"

    neural_score: int = 0

    focus_index: int = 0

    sync_rating: int = 0

    created_at: datetime = datetime.utcnow()


class UserResponse(BaseModel):
    username: str
    email: EmailStr
    brain_rank: str
    neural_score: int