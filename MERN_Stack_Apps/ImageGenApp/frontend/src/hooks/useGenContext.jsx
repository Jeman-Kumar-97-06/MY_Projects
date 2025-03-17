import { GenContext } from "../contexts/GenContext";
import { useContext } from "react";

export const useGenContext = () => {
    const context = useContext(GenContext);
    if (!context) {
        throw Error("useGenContext must be used inside components that have access to GenContext");
    }
    return context;
}