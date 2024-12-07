const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const { Server } = require("socket.io"); // Import the Server class from socket.io
const path = require("path");

let PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "DELETE", "UPDATE"],
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Set up Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Same origin as specified in corsOptions
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
 
// MongoDB connection and server startup 
console.log("Connecting to MongoDB...");
mongoose
  .connect(process.env.MONGODB_STRING)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });