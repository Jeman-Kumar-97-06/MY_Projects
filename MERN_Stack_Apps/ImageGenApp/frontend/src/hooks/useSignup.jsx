import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error,setError]         = useState(null);
    const [isloading,setIsloading] = useState(null);
    const {dispatch}               = useAuthContext();
    const signup = async (fulln,usrn,pwd,pfPic) => {
        setIsloading(true);
        setError(null);
        const fData = new FormData();
        fData.append('fulln',fulln);
        fData.append('usrn',usrn);
        fData.append('pwd',pwd);
        fData.append('pfPic',pfPic);
        console.log(fData)

        const resp = await fetch('https://imggen-06-03.onrender.com/api/users/signup',{
            method : "POST",
            body : fData
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