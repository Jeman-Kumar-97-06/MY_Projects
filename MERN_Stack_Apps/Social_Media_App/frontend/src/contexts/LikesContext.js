import { createContext,useReducer } from "react";

export const LikesContext = createContext();

export const likesReducer = (state,action) => {
    switch(action.type) {
        case "SET_LIKES":
            return {likes:action.payload}
        case "LIKED":
            return {likes:state.likes+1}
        case "UNLIKES":
            return {likes:state.likes-1}
        default:
            return state;
    }
}

export const LikesContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(likesReducer,{likes:null});
    return (
        <LikesContext.Provider value={{...state,dispatch}}>
            {children}
        </LikesContext.Provider>
    )
}