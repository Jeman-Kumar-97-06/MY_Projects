const exp            = require('express');
const {createServer} = require('node:http');
const app            = exp();
const server         = createServer(app);
const {Server}       = require('socket.io');
const io             = new Server(server);
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/my-room',(req,res)=>{
    res.render('index');
})

io.on('connection',(socket)=>{
    console.log('socket connection established');
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    });
    socket.on('chat message to my room',(msg)=>{
        socket.join('My Room');
        io.to('My Room').emit('chat message',msg);
    })
});

server.listen('3000',()=>{console.log('Listening at 3000')})



