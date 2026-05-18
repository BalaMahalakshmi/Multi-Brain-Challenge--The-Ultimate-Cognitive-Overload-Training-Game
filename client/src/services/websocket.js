export const createGameSocket = () => {
  const socket = new WebSocket("ws://127.0.0.1:8000/ws/game");

  socket.onopen = () => {
    console.log("WebSocket Connected");
  };

  socket.onmessage = (event) => {
    console.log("Socket Message:", event.data);
  };

  socket.onerror = (error) => {
    console.log("Socket Error:", error);
  };

  return socket;
};