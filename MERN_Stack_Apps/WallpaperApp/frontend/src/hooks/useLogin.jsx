import { useState } from "react";
import {useAuthContext} from './useAuthContext';

export const useLogin = () => {
    const [error,setError] = useState(null);
    const [isloading,setIsloading] = useState(null);
    const {dispatch} = useAuthContext();
    
    const login = async (username,password) => {
        setIsloading(true);
        setError(null);
        const resp = await fetch('https://my-projects-lxja.onrender.com/api/users/login',{
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify({username,password})
        })
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
    };
    return {login,error,isloading};
} 