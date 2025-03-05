import { createContext,useReducer } from "react";

export const ConvoContext = createContext();

export const convoReducer = (state,action) => {
    switch (action.type) {
        case "SETCONVOS":
            return {convos:action.type};
        default :
            return state;
    }
};

export const ConvoContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(convoReducer,{convos:null});
    return (
        <ConvoContext.Provider value={{...state,dispatch}}>
            {children}
        </ConvoContext.Provider>
    )
}

