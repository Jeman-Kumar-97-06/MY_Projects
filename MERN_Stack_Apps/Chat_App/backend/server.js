const express = require('express');
const {createServer} = require('node:http');
const {join} = require('node:path');
const {Server} = require('socket.io');

const app = express();

const server = createServer(app);

//Initializing new instance of socket.io
//We pass 'server'as argument and allow io to check/listen to events from sockets.
const io = new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'))
})

io.on('connection',(socket)=>{
    socket.on('chat msg',(msg)=>{
        io.emit('chat msg',msg);
    })
    //Every time client refreshes browser/app the 'disconnect' event will be triggered
    socket.on('disconnect',()=>{
        console.log('a user disconnected')
    })
})



server.listen(3000,()=>{
    console.log('server running at 3000');
})