import {useState} from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error,setError] = useState(null);
    const [isloading,setIsloading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (name,profilepic,email,password) => {
        setIsloading(true);
        setError(null);
        const resp = await fetch('/api/users/signup',{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify({name,profilepic,email,password})});
        const json = await resp.json();
        if (!resp.ok) {
            setError(json.error);
            setIsloading(false);
        }
        if (resp.ok){
            localStorage.setItem('user',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json});
            setIsloading(false);
        }
    }
    return {error,isloading,signup};
}