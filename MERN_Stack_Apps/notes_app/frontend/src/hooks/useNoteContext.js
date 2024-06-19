import { NoteContext } from "../context/NoteContext";
import {useContext} from 'react';

export const useNoteContext = () => {
    const context = useContext(NoteContext);//={state,dispatch}
    if(!context)
        {
            throw Error('useNoteContext must be used inside components that are wrapped inside "NoteContextProvider"')
        }
    return context;
}