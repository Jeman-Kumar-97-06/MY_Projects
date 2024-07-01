import {useState,useEffect} from 'react';
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url).then(res=>{
                if(!res.ok){
                    throw Error('Sorry');
                }
                return res.json();
            }).then(dat=>{
                setData(dat);
                setIsPending(false);
                setError(null);
            }).catch(err=>{
                setIsPending(false);
                setError(err.message);
            })
        },1000)
    },[url])
    return {data,isPending,error};
}
export default useFetch;