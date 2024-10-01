import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw Error("useAuthContext must be used inside a component that has access to Auth Context");
    }
    return context;
};