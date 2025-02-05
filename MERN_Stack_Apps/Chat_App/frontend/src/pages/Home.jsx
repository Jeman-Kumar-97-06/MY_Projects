import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:4000');

function Home() {
  const [msgs, setMsgs] = useState([]);
  const [msg,setMsg]  = useState("");
  const [usrName, setUsrname] = useState("User"+Math.floor(Math.random() * 100));

  useEffect(()=>{
    axios.get('http://localhost:4000/api/chat').then(res=>setMsgs(res.data));
    socket.on('receiveMessage',(newMessage)=>{
      setMsgs(prev=>[...prev,newMessage]);
    })
  },[])

  const sendMessage = () => {
    if (msg.trim()) {
      const newMessage = {sender : usrName, message : msg};
      socket.emit('sendMessage',newMessage);
      axios.post('http://localhost:4000/api/chat',newMessage);
      setMsg('');
    }
  }

  return (
     <div style={{ textAlign: "center", padding: 20 }}>
            <h2>Chat App</h2>
            <div style={{ border: "1px solid black", height: "300px", overflowY: "auto" }}>
                {msgs.map((msg, i) => (
                    <div key={i} style={{ textAlign: msg.sender === usrName ? "right" : "left" }}>
                        <b>{msg.sender}: </b>{msg.message}
                    </div>
                ))}
            </div>
            <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type a message" />
            <button onClick={sendMessage}>Send</button>
        </div>
  )
}

export default Home;