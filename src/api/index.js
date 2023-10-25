const socket = new WebSocket("ws://localhost:8080/ws");

const connect = (renderMessage) => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (message) => {
    console.log("Receiving", message);
    renderMessage(message);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

const sendMessage = (message) => {
  console.log("Sending Message: ", message);
  socket.send(message);
};

export { connect, sendMessage };
