from fastapi import FastAPI

from app.api.routes import (
    auth,
    game,
    ai,
    leaderboard
)

from app.websocket import game_socket

app = FastAPI(
    title="Multi Brain Challenge API"
)


app.include_router(
    auth.router,
    prefix="/auth",
    tags=["Auth"]
)

app.include_router(
    game.router,
    prefix="/game",
    tags=["Game"]
)

app.include_router(
    ai.router,
    prefix="/ai",
    tags=["AI"]
)

app.include_router(
    leaderboard.router,
    prefix="/leaderboard",
    tags=["Leaderboard"]
)

app.include_router(game_socket.router)


@app.get("/")
async def root():
    return {
        "message": "Multi Brain Challenge Backend Running"
    }