import { useCallback } from 'react';
import {io} from 'socket.io-client'
function App() {
  const socket = io('http://localhost:5000');
  socket.on('connect',()=>{
    console.log("Connected to Server: ",socket.id);
  });
  //Listen for messages from the server:
  socket.on('message',(data)=>{
    const li = document.createElement('li');
    li.textContent = data;
    document.getElementById("messages").appendChild(li);
  });
  //Function to send messages:
  const handleSendMessage = useCallback(()=>{
    const message = document.getElementById('message').value;
    socket.emit('message',message); //Send message from here to server.
    document.getElementById("message").value = '';
  })
  function sendMessage() {
      
  }

  socket.on("disconnect",()=>{
    console.log("Disconnected from server")
  })
  return (
      <>
        <h1>Simple Chat</h1>
        <input id="message" type="text" placeholder="Type a message"/>
        <button onClick={handleSendMessage}>Send</button>
        <ul id="messages"></ul>
      </>
  )
}

export default App