import { useContext } from "react";
import { LikesContext } from "../contexts/LikesContext";

export const useLikesContext = () => {
    const context = useContext(LikesContext);
    if (!context) {
        throw Error("useLikesContext must be used inside componenets with access to LikesContext");
    }
    return context;
}
