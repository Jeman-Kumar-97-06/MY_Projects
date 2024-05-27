//Global Auth State used to update authorization state locally
import {createContext,useReducer} from 'react';
export const AuthContext = createContext();
export const authReducer = (state,action) => {
    switch(action.type)
    {
        case 'LOGIN':
            return {user:action.payload};
        case 'LOGOUT':
            return {user:null};
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const {state,dispatch} = useReducer(authReader,{user:null});
    console.log('AuthContext state:',state);

    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

