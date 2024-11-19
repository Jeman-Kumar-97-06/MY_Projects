const express        = require('express');
const {createServer} = require("node:http");
const {join}         = require("node:path");
const {Server}       = require("socket.io")

const app            = express();
const server         = createServer(app);
const io             = new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,"./pages/index.html"));
})

io.on('connection',(socket)=>{
    console.log("A user connected!");
    console.log(socket);
})

server.listen(3000,()=>{
    console.log("Listening to requests at 3000!")
})