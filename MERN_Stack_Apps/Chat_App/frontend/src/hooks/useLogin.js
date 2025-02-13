import {useContext, useState} from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useLogin = () => {
    const [error,setError] = useState(null);
    const [isloading,setIsloading] = useState(null);
    const {dispatch} = useContext(AuthContext);

    const login = async ({username,password}) => {
        setIsloading(true);
        setError(null);
        const response = await fetch('http://localhost:3000/api/auth/login', {method:'POST',
                                                          headers:{'Content-Type':'application/json'},
                                                          body:JSON.stringify({username,password})});
        const json     = await response.json();
        if (!response.ok) {
            setIsloading(false);
            setError(json.error);
        }
        if (response.ok) {
            localStorage.setItem('chat-user',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json})
            console.log(json)
            setIsloading(false);
        }
    }
    return {login,isloading,error};
}