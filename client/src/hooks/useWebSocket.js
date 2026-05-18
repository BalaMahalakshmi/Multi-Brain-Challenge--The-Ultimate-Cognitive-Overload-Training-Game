import { useEffect, useState } from "react";

export const useWebSocket = () => {

  const [socket, setSocket] = useState(null);

  useEffect(() => {

    const ws = new WebSocket(
      "ws://127.0.0.1:8000/ws/game"
    );

    setSocket(ws);

    return () => ws.close();

  }, []);

  return socket;
};