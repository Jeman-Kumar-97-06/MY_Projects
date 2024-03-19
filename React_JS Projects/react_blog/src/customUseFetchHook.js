import {useState,useEffect} from 'react';
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(()=>{
        setTimeout(()=>{
          fetch(url,{
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
            "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
    
          }).then(res=>{
                if(!res.ok){
                  throw Error("Custom Error By Doom_Guy_26 : Could'nt fetch data from db.json")
                };
                return res.json();
              }).then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
              }).catch(err=>{
                setError(err.message);
                setIsPending(false);
              })
        },1000);
      },[url])
      return {data, isPending, error};
}

export default useFetch;