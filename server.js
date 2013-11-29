// Module dependencies.
var express = require('express');
var http = require('http');

var server = express();

//Make the public folder the context root
server.use(express.static('public'));

//Serve index.html when a user requests '/'
server.get('/', function(req, res) {
    res.sendfile("public/index.html");
});

//Start Server
http.createServer(server).listen(3000);