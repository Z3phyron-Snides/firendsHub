const http = require("http");
const app = require("./src/app");
const socket = require("./src/socket");

const server = http.createServer(app);

// Initialize Socket.io and pass in the HTTP server instance
socket.init(server);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
