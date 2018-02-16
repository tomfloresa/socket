var express = require("express");
var http = require("http");
var socketio = require("socket.io");
var mongojs = require("mongojs");

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
var db = mongojs(process.env.MONGO_URL || "mongodb://localhost:27017/local");
server.listen(3000, () => console.log("listening on *:3000"));

// The event will be called when a client is connected.
websocket.on("connection", socket => {
  console.log("A client just joined on", socket.id);

  // Server side
  socket.on("message", message => {
    // Save the message document in the `messages` collection.
    db.collection("messages").insert(message, (err, message) => {
      console.log(err, message);
    });

    // The `broadcast` allows us to send to all users but the sender.
    socket.broadcast.emit("message", message);
  });

  // Emit messages
  socket.on("getMessages", messages => {
      const messagesRetrieved = db.collection("messages");
      socket.emit("messages", messagesRetrieved);
  })
});
