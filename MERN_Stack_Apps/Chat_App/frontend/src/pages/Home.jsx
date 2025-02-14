import { useContext, useEffect, useState } from "react";
import Messages from "../components/Messages";
import { AuthContext } from "../contexts/AuthContext";
import useConversation from "../zustand/useConversation";
import useSendMessage from "../hooks/useSendMessage";

const Home = () => {
    const {selectedConversation,setSelectedConversation} = useConversation();
    const {user} = useContext(AuthContext);
    const [msg,setMsg] = useState("");
    const {sendMessage,loading} = useSendMessage();
    useEffect(()=>{
        return () => {
            setSelectedConversation(null)
        }
    },[setSelectedConversation])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!msg) {
             return;
        } 
        await sendMessage(message);
        setMsg("");
    }
    return (
        <div style={{marginLeft:"10px",marginTop:"50px",marginRight:"20px",padding:"1px 16px",height:"800px"}} className="chat_main">     
            { !selectedConversation ? (
                <NoChatSelected un={user.user.fullName}/>
            )
              :  (<>
            <div>
                <h3>To : {user.user.username}</h3>
            </div>
            
            <div className="all_msgs">
                <Messages/>    
                <Messages/>
                <Messages/>
            </div>
            
            <form class="mb-6 msg_inpt_form" onSubmit={handleSubmit}>
                <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-gray-500">Your Message</label>
                <input type="text" id="success" class="bg-green-50 border border-green-500 text-gray-900 dark:text-white placeholder-gray-700 dark:placeholder-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 msg_inpt" placeholder="Type a Message" onChange={e=>setMsg(e.target.value)}/>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {loading ? "...":"Send"}
                </button>
                {/* <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Well done!</span> Some success message.</p> */}
            </form>
            </>)}
        </div>
    )
};

export default Home;

const NoChatSelected = (p) => {
    console.log(p)
    return (
        <div>
            <div>
                <p>Welcome {p.un}</p>
                <p>Select a Chat to start messaging</p>
            </div>
        </div>
    )
}