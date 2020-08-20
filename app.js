//In This Code No Rooms Were Created
/*var app = require('express')();
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
});  */
//by using your own room id code you can create room and start group chat there 
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);  
let x=[];
app.get('/', function(req, res) {
   res.sendfile('index.html');
});

io.on('connection', function(socket) {
   socket.on('clientEvent', function(data) { 
socket.join("room-"+data.code);  
if(x[data.code]==undefined){
   x[data.code]="";
}
x[data.code]=x[data.code]+data.message+"</br>"; 

   io.sockets.in("room-"+data.code).emit('connectToRoom', {description:x[data.code]});
     
});

