var express = require('express');
var http = require ('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 8000);
app.use('/static', express.static(__dirname + '/static'));

//Routing
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Starting server
server.listen(8000,function(){
    console.log('Starting server on port 8000');
});