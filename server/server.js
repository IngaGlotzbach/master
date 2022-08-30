//das ist der Port der für alle zugänglich ist 
var express = require('express')
var app = express();

var io = require('http').Server(app);
var socket = require('socket.io')(io, {
    cors: {
        origin: "http://igl-ai-guidance.s3-website.eu-central-1.amazonaws.com/",
        methods: ["GET", "POST"]
      }
});

socket.on('connect',function(socket){
    console.log('got a connection', `${socket.id}`)
});

io.listen(3000)