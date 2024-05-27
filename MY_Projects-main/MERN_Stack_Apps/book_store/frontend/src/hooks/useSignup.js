import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//when the details are submitted in the "Signup.js" page the details have to be sent to the ...
//...server and the user should be signed up and then should also be logged in after that .....
//...the following function does that. It first sends POST request with email & password as ...
//...payload. Then, if the response is ok, user will be saved to the local storage. and the ...
//...user will be logged in.
export const useSignup = () => {
    const [error,setError]         = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch}               = useAuthContext();
    const signup = async (email,password) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/user/signup',{method:"POST",header:{"Content-Type":'application/json'},body:JSON.stringify({email,password})});
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