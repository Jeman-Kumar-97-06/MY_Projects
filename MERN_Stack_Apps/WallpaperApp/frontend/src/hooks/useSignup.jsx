import { useState } from "react";
import {useAuthContext} from './useAuthContext';

export const useSignup = () => {
    const [error,setError]          = useState(null);
    const [isloading, setIsloading] = useState(null);
    const {dispatch}                = useAuthContext();
    const signup = async (fullname,username,password) => {
        setIsloading(true);
        setError(null);
        const resp = await fetch('http://localhost:2000/api/users/signup',{method:"POST",
                                                      headers:{"Content-Type":"application/json"},
                                                      body : JSON.stringify({fullname,username,password})
                                                      });
        const json = await resp.json();
        if (!resp.ok){
            setIsloading(false);
            setError(json.error);
        }
        if (resp.ok){
            localStorage.setItem('wallpick_user',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json});
            setIsloading(false);
            setError(null);
        }
    }
    return {signup,error,isloading};
}