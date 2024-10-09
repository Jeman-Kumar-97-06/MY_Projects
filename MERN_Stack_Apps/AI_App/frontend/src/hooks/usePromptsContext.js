import { useContext } from "react";
import { PromptsContext } from "../contexts/PromptsContext";

export const usePromptsContext = () => {
    const context = useContext(PromptsContext);
    if (!context) {
        throw Error('usePromptsContext must be used inside a component that has access to PromptsContext');
    }
    return context;
}