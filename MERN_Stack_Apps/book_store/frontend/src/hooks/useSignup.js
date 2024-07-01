import {useState} from 'react';
import { useAuthContext } from './useAuthContext';
//THE FOLLOWING FUNCTION RETURN A SIGNUP FUNCTION TO SIGNUP THE USER, THE ERRORS IF ANY, AND CONTENT LOADING STATE FOR FRONTEND.
export const useSignup = () =>{
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();  
    const signup = async (email,password) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/book_store/users/signup',{method:'POST',header:{"Content-Type":"application/json"},body:JSON.stringify({email,password})});
        const json     = await response.json();
        if(!response.ok)
            {
                setIsLoading(false);
                setError(json.error);
            }
        if(response.ok)
            {
                localStorage.setItem('user',JSON.stringify(json));
                dispatch({type:'LOGIN',payload:json});
                setIsLoading(false);
            }
    };
    return {signup,isLoading,error};
}