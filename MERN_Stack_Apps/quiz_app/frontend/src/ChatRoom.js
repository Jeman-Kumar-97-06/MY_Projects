import { useState,useEffect } from "react";

const ChatRoom = () => {
    const [messages,setMessages] = useState([]);
    const [user,setUser]         = useState('');
    const [message,setMessage]   = useState('');
    
    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:4123/messages');
            const data     = await response.json();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:',error);
        }
    };

    const sendMessage = async () => {
        try {
            await fetch('http://localhost:4123/messages',{method:'POST',headers : {'Content-Type': 'application/json'},body:JSON.stringify({user,message})});
            setMessage('');
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:',error);
        }
    }

    useEffect(()=>{
        fetchMessages();
        const interval = setInterval(()=>{
            fetchMessages();
        },2000);
        return () => clearInterval(interval)
    },[]);

    return (
        <div>
            <h2>Chat Room</h2>
            <ul>
                {messages.map((message)=>(
                    <li key={message._id}>
                        <strong>{message.user}:</strong> {message.message}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Your name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
};

export default ChatRoom;