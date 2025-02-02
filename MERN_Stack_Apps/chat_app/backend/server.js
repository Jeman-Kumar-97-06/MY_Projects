const express = require('express');
const http    = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

//Initialize socket.io with CORS
const io = new Server(server,{
    cors : {
        origin : "http://localhost:5173",
    }
});

app.use(cors());
app.use(express.json());

//What to do when clients make connection to server.
io.on("connection",(socket)=>{
    console.log("A User connected",socket.id);
   
    //Listen for message from the client:
    socket.on("message",(data)=>{
        console.log("Received Message: ", data);
        io.emit('message',data);
    })

    //Listen for 'disconnect' request :
    socket.on('disconnect',()=>{
        console.log("User disconnected: ",socket.id);
    })

})

server.listen(5000,()=>{
    console.log("Server Listening at 5000")
})

