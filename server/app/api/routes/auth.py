from fastapi import APIRouter

from app.database.schemas import (
    UserRegister,
    UserLogin
)

from app.database.mongodb import (
    users_collection
)

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter()


@router.post("/register")
async def register(user: UserRegister):

    existing_user = await users_collection.find_one({
        "email": user.email
    })

    if existing_user:
        return {
            "message": "Email already exists"
        }

    hashed = hash_password(user.password)

    new_user = {
        "username": user.username,
        "email": user.email,
        "password": hashed,
        "brain_rank": "Beginner"
    }

    result = await users_collection.insert_one(new_user)
    if not result.inserted_id:
        return {
            "message": "Registration failed"
            }

    return {
        "message": "User registered successfully"
    }


@router.post("/login")
async def login(user: UserLogin):

    db_user = await users_collection.find_one({
        "email": user.email
    })

    if not db_user:
        return {
            "message": "Invalid credentials"
        }

    if not verify_password(
        user.password,
        db_user["password"]
    ):
        return {
            "message": "Invalid credentials"
        }

    token = create_access_token({
        "sub": db_user["email"]
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }