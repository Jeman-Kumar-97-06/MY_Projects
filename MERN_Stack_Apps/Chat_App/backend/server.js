require('dotenv').config();
const { Server } = require('socket.io')
const cors       = require('cors');
const exp        = require('express');
const app        = exp();
const charRt     = require('./routes/chats');
const usrRt      = require('./routes/users');
const mong       = require('mongoose');
const http       = require('http');
const server     = http.createServer(app);
const io         = new Server(server, {cors: {origin:"*"}});

app.use(exp.json());
app.use(cors({
    origin: "http://localhost:5173", // React frontend URL
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));


io.on("connection",(socket)=>{
    socket.on("sendMessage",(message)=>{
        io.emit('receiveMessage',message);
    })
})

app.use("/api/user",usrRt);
app.use('/api/chat',charRt);

mong.connect(process.env.MONGOURL).then(
    () => {
        app.listen(process.env.PORT,()=>{
            console.log(`Connected & Listening at ${process.env.PORT}`)
        })
    }
)
.catch(err=>{console.log(err)});