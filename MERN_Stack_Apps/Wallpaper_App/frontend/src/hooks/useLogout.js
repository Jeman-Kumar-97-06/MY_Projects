import { useAuthContext } from "./useAuthContext";
import {useWallsContext} from './useWallsContext';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:wallContext} = useWallsContext();
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({type:"LOGOUT"});
        wallContext({type:"SET_WALLS",payload:null});
    }
    return {logout};
};