import {useState} from 'react';
import { useAuthContext } from './useAuthContext';

//Used to send requests from frontend to backend:
export const useSignup = () => {
    const [error,setError] = useState(null);
    const [isloading,setIsloading] = useState(false);
    const {dispatch} = useAuthContext();

    const signup = async (ElementInternals,password) => {
        setIsloading(true);
        setError(null);
        const resp = await fetch('/api/users/signup',{method:"POST",headers:{"Content-Type":"application/json"}})
    }
}