import { useContext } from "react";
import { ConvoContext } from "../contexts/ConvoContext";

export const useConvoContext = () => {
    const context = useContext(ConvoContext);
    if (!context) {
        throw Error("useConvoContext must be used inside components that have access to ConvoContext");
    };
    return context;
}