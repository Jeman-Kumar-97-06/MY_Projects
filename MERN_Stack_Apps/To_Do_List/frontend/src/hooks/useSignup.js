import {useState} from 'react';
import { useAuthContext } from './useAuthContext';

//Used to send requests from frontend to backend:
export const useSignup = () => {
    const [error,setError] = useState(null);
    const [isloading,setIsloading] = useState(false);
    const {dispatch} = useAuthContext();

    const signup = async (email,password) => {
        setIsloading(true);
        setError(null);
        const resp = await fetch('/api/users/signup',{method:"POST",
                                                      headers:{"Content-Type":"application/json"},
                                                      body:JSON.stringify({email,password})
                                                      })
        const json = await resp.json();
        if (!resp.ok) {
            setIsloading(false);
            setError(json.error)
        }
        if (resp.ok) {
            localStorage.setItem('user',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json});
            setIsloading(false);
        }
    }
    return {signup,isloading,error};
}