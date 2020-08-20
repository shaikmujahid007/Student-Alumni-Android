//In This Code No Rooms Were Created
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
