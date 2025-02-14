import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from 'react'

const useSendMessage = () => {
    const [loading,setLoading] = useState(false);
    const {msgs,setMsgs}       = useConversation();
    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const res  = await fetch(`http://localhost:3000/api/message/send/${selectedConversation._id}`,{
                method:"POST",
                headers : {"Content-Type":"application/json"},
                body : JSON.stringify({message})
            })
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setMsgs([...msgs,data])
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }
    return {sendMessage,loading}
}

export default useSendMessage;