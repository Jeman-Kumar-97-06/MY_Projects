import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error,setError]         = useState(null);
    const [isloading,setIsloading] = useState(null);
    const {dispatch}               = useAuthContext();
    const signup = async (fulln,usrn,pwd,pfPic) => {
        setIsloading(true);
        setError(null);
        const resp = await fetch('/api/users/signup',{
            method : "POST",
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({fulln,usrn,pwd,pfPic})
        })
        const json = await resp.json();
        if (!resp.ok) {
            setIsloading(false);
            setError(json.error)
        }
        if (resp.ok) {
            localStorage.setItem('img_gen_usr',JSON.stringify(json));
            dispatch({type:"LOGIN",payload:json});
            setIsloading(false);
            setError(null);
        }
    }
    return {error,isloading,signup};
}