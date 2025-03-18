import { useReducer,createContext } from "react";

export const GenContext = createContext();

export const genReducer = (state,action) => {
    switch (action.type) {
        case "SET_IMGS":
            return {imgs : action.payload};
        case "NEW_IMG":
            return {img : [action.payload, ...state.imgs]};
        default :
            return state;
    }
};

export const GenContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(genReducer,{imgs:[]});
    return (
        <GenContext.Provider value={{...state,dispatch}}>
            {children}
        </GenContext.Provider>
    )
};