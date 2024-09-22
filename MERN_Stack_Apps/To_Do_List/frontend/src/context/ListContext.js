import { createContext,useReducer } from "react";

export const ListContext = createContext();

export const listReducer = (state,action) => {
    switch(action.type){
        case "SET_LISTS":
            return {
                lists : action.payload
            }
        case "CREATE_LIST":
            return {
                lists : [action.payload , ...state.lists]
            }
        case "DELETE_LIST":
            return {
                lists : state.lists.filter(l => l._id !== action.payload._id)
            }
        case "UPDATE_LIST":
            const list_upd = state.lists.filter(l=>l._id === action.payload._id);
            const list_indx= state.lists.indexOf(list_upd[0]);
            state.lists.splice(list_indx,1,action.payload);
            return {
                lists : state.lists
            }
        default :
            return state;
    }
};

export const ListContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(listReducer,{lists:null});
    return (
        <ListContext.Provider value={{...state,dispatch}}>
            {children}
        </ListContext.Provider>
    );
}