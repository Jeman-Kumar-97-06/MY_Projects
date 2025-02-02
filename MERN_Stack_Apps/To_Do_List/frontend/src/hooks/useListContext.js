import { ListContext } from "../context/ListContext";
import { useContext } from "react";

export const useListContext = () => {
    const context = useContext(ListContext);
    if (!context) {
        throw Error("useListContext must be used inside components wrapped with ListContextProvider");
    }
    return context;
}

