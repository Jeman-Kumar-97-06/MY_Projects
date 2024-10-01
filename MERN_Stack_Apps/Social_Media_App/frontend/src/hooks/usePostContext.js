import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw Error("usePostContext hook must be used inside a component that has access to Post Context");
    }
    return context;
}
