from fastapi import APIRouter
from fastapi import WebSocket

from app.core.websocket_manager import (
    ConnectionManager
)

manager = ConnectionManager()

router = APIRouter()


@router.websocket("/ws/game")
async def websocket_endpoint(
    websocket: WebSocket
):

    await manager.connect(websocket)

    try:

        while True:

            data = await websocket.receive_json()

            await manager.send_personal_message(
                {
                    "status": "received",
                    "difficulty": 5
                },
                websocket
            )

    except:
        manager.disconnect(websocket)