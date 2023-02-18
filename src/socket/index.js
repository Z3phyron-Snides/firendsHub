const socketIO = require("socket.io");

let io;

module.exports = {
  init: (server) => {
    io = socketIO(server);

    io.on("connection", (socket) => {
      console.log("New client connected");

      // Handle incoming chat messages
      socket.on("chatMessage", (data) => {
        console.log("Received chat message:", data);

        // Emit the chat message to all connected clients
        io.emit("chatMessage", data);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });

    return io;
  },

  getIO: () => {
    if (!io) {
      throw new Error("Socket.io not initialized");
    }

    return io;
  },
};
