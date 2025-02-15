import { createContext,useEffect,useReducer } from "react";
export const AuthContext = createContext();
export const authReducer = (state,action) => {
    switch (action.type) {
        case "LOGIN":
            return {user:action.payl}
        case "LOGOUT":
            return {user:null};
        default:
            return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{user:null});
    useEffect(()=>{

    },[]);

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}