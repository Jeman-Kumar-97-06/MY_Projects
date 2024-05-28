//This code manipulates Global Authentication State Locally without the need for refreshing the page after signing up / logging in

import {createContext,useReducer} from 'react';
export const AuthContext = createContext();
export const authReducer = (state,action) => {
    switch(action.type)
    {
        case "LOGIN":
            return {user:action.payload};
        case 'LOGOUT':
            return {user:null};
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    //THE FOLLOWING LINE UPDATES THE 'USER' STATE LOCALLY AND UPDATES THE SITE.
    const [state,dispatch] = useReducer(authReducer,{user:null});
    return (
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
};
