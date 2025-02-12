import { useState } from "react";
import toast from 'react-hot-toast';
const useSignup = () => {
    const [error,setError]     = useState(null);
    const [loading,setLoading] = useState(false);

    const signup = async ({fullName,username,password,confirmPassword,gender}) => {
        setLoading(true);
        setError(null);
        const response = await fetch('http://localhost:3000/api/auth/signup',{method:"POST",
                                                                              headers:{"Content-Type":"application/json"},
                                                                              body:JSON.stringify({fullName,username,password,confirmPassword,gender})})
        const json     = await response.json();
        if (!response.ok) {
            setLoading(false);
            setError(json.error);
        }
        else if (response.ok) {
            setLoading(false);
            console.log(json)
        }
    }
    return {signup,loading,error};
};

export default useSignup;