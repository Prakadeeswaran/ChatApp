var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;

app.get('/', function(req, res){
	console.log("Getting HTML")
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('succ')
  socket.on('chat message', function(msg){
  	console.log(msg)
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
