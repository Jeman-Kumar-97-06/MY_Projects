import { NoteContext } from "../context/NoteContext";
import { useContext } from 'react';

export const useNoteContext = () => {
    const context = useContext(NoteContext);

    if(!context)
    {
        throw Error("useNoteConext must be used inside a component wrapped inside NoteContextProvider");
    }

    return context;
}