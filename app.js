/*ar app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

io.on('connection', function(socket) {
   console.log('A user connected');

   //Send a message when 
   setTimeout(function() {
      //Sending an object when emmiting an event
      socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
   }, 4000);

   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});*/   
//client to server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); 
let x="";

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

io.on('connection', function(socket) {
   socket.on('clientEvent', function(data) { 
//     console.log(data); 
x=x+data+"</br>"
      io.sockets.emit('newclientconnect',{description:x});
   });
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
}); 
/*broadcast to all clients*/
/*var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

var clients = 0;
io.on('connection', function(socket) {
   clients++;
   io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
   socket.on('disconnect', function () {
      clients--;
      io.sockets.emit('broadcast',{ description: clients + ' clients connected!'});
   });
});*/

/*http.listen(3000, function() {
   console.log('listening on localhost:3000');
});*/
/*This was to send an event to everyone. Now, if we want to send an event to everyone, but the client that caused it 
(in the previous example, it was caused by new clients on connecting), we can use the socket.broadcast.emit.*/
/*var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

var clients = 0;
io.on('connection', function(socket) {
   clients++;
   socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
   socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
   socket.on('disconnect', function () {
      clients--;
      socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
   });
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});*/