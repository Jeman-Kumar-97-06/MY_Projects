import { createContext } from "react";
import { useReducer } from "react";

export const NoteContext = createContext();

export const noteReducer = (state,action) => {
    switch(action.type)
    {
        case 'SETNOTES':
            return {notes:action.payload};
        case 'CREATENOTE':
            return {notes:[action.payload,...state.notes]};
        default:
            return state;
    }
}

export const NoteContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(noteReducer,{notes:null});



    return (
        //the 'value' below stores the data that all 'children' can access.
        <NoteContext.Provider value={{...state,dispatch}}>
            {children}
        </NoteContext.Provider>
    )
}
