import { useAuthContext } from "./useAuthContext";
import {usePostContext} from './usePostContext';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:postDispatch} = usePostContext();
    const logout = () => {
        //Remove user from localStorage:
        localStorage.removeItem('user');
        //Dispatch logout action:
        dispatch({type:"LOGOUT"});

        postDispatch({type:"SET_POSTS",payload:null});

    }
    return {logout};
}