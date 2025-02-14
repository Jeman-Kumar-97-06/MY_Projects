import { useEffect, useState } from "react";

const useGetConversation = () => {
    const [loading,setLoading] = useState(false);
    const [convos,setConvos]   = useState([]);
    const [error,setError]     = useState(null);
    useEffect(()=>{
        const getConversations = async () => {
            setLoading(true);
            const res  = await fetch('http://localhost:3000/api/sbusers');
            const data = await res.json();
            if (res.ok){
                setLoading(false);
                setConvos(data);
            } else if (!res.ok) {
                setLoading(false);
                setError(data.error)
            }
        }
        getConversations();
    },[])
    return {loading,convos}
};

export default useGetConversation;