import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//Used to check if the AuthContext is used in elements not surrounded by AuthContextProvider.
//If you don't check and throw the error the app will crash.
//finally it returns the context
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context)
        {
            throw Error('useAuthContext must be used inside elements surrounded by AuthContextProvider');
        }
    return context;
}