import { AuthContext } from "../context/AuthContext";
import { useContext} from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw Error("The useAuthContext must be used inside a component wrapped by AuthContextProvider!")
    }
    return context;
}