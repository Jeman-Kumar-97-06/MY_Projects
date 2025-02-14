import { useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
   const [isloading,setIsLoading] = useState(false);
   const {messages,setMessages,selectedConversation} = useConversation();
   useEffect(()=>{
        const getMessages = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/message/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setMessages(data); 
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsLoading(false)
            }
        }
        if (selectedConversation?._id){
            getMessages();
        }
   },[selectedConversation?._id,setMessages]);
   return {messages,isloading}
};

export default useGetMessages;