var express = require("express");
var http = require("http");
var socketio = require("socket.io");
var mongojs = require("mongojs");

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
var db = mongojs(
  process.env.MONGO_URL ||
    "developer:hansmoleman@ds239128.mlab.com:39128/socket-test"
);
server.listen(3000, () => console.log("listening on *:3000"));

var chatId = 1;

// The event will be called when a client is connected.
websocket.on("connection", socket => {
  console.log("A client just joined on", socket.id);

  // Server side
  socket.on("message", message => {
    console.log(message);
    _sendAndSaveMessage(message, socket);
  });

  // Emit messages to client
  socket.on("getMessages", messages => {
    db
      .collection("messages")
      // Find all
      .find()
      // Sort by creation date and emit once sorting is done
      .sort({ createdAt: 1 }, (err, docs) => {
        console.log(docs.reverse());
        socket.emit("messages", docs);
      });
  });
});

// Save the message to the db and send all sockets but the sender.
_sendAndSaveMessage = (message, socket, fromServer) => {
  var messageData = {
    text: message.text,
    user: message.user,
    createdAt: new Date(message.createdAt),
    chatId: chatId
  };

  db.collection("messages").insert(messageData, (err, message) => {
    // If the message is from the server, then send to everyone.
    var emitter = fromServer ? websocket : socket.broadcast;
    console.log(emitter);
    emitter.emit("message", [message]);
  });
};

// Allow the server to participate in the chatroom through stdin.
var stdin = process.openStdin();
stdin.addListener("data", function(d) {
  _sendAndSaveMessage(
    {
      text: d.toString().trim(),
      createdAt: new Date(),
      user: { _id: "robot" }
    },
    null /* no socket */,
    true /* send from server */
  );
});
