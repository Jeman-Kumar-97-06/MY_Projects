import { createContext, useReducer } from "react";

export const NoteContext = createContext();

export const noteReducer = (state,action) => {
    switch (action.type){
        case 'SET_NOTES':
            return {
                notes : action.payload
            }
        case 'CREATE_NOTE':
            return {
                notes : [action.payload,...state.notes]
            }
        case "DELETE_NOTE":
            return {
                notes : state.notes.filter((n)=>n._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export const NoteContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(noteReducer,{notes:null});
    //In the return statement below i'm exporting 'state' and 'dispatch'...
    //...bcoz i need access to dispatch to fuck with the 'state' value.
    return (
        <NoteContext.Provider value={{...state,dispatch}}>
            {children }
        </NoteContext.Provider>
    )
}