import { useEffect,useState } from "react";

export const useGetConvos = () => {
    const [err,setErr]         = useState(null);
    const [loading,setLoading] = useState(false);
    const [convs,setConvs]     = useState([]);
    
    useEffect(()=>{
        const getCon = async () => {
            setLoading(true);
            try {
                const res  = await fetch('/api/users/');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConvs(data);
            } catch (error) {
                setErr(error);
                setLoading(false);
            }
        }
        getCon();
    },[]);
    return {convs,err,loading};
};
