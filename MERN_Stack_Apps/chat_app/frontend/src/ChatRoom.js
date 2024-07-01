import {useState,useEffect} from 'react';

const ChatRoom = () => {
    const [messages,setMessages] = useState([]);
    const [user,setUser]         = useState('');
    const [message,setMessage]   = useState('');

    //Sending HTTP Req to backend code to fetch all messages.
    const fetchMessages = async () => {
        try {
            const respo = await fetch ('http://localhost:4124/messages');
            const data  = await respo.json();
            setMessages(data);
        } catch (err) {
            console.error('Error fetching messages : ',err);
        }
    };

    //Storing new messages to store in db 
    const sendMessage = async () => {
        try {
            await fetch('http://localhost:4124/messages',{
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify({user,message})
            })
            setMessage('');
            fetchMessages();
        } catch (error) {
            console.error('Error sending message :',error);
        }
    };

    useEffect(()=>{
        fetchMessages();
        const interval = setInterval(()=>{ fetchMessages(); },2000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div>
            <h2>Chat Room</h2>
            <ul>
                {messages.map((message) => (
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
    );
};
export default ChatRoom;