var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });

  socket.on('all messages', function (msgs) {
    io.emit('all messages', msgs);
  });
});

http.listen(3001, function () {
});