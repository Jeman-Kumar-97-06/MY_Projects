import {createContext, useReducer, useEffect, Children} from 'react';

export const AuthContext = createContext();

export const authReducer = (state,action) => {
    switch(action.type){
        case "LOGIN":
            return {user:action.payload};
        case "LOGOU":
            return {user:null};
        default :
            return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{user:null})

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('chatuser'));
        if (user) {
            dispatch({type:"LOGIN",payload:user});
        }
    },[])

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}