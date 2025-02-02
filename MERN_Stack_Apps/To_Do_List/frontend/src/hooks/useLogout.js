import {useAuthContext} from './useAuthContext';
import {useListContext} from './useListContext';

export const useLogout = () => {
    const {dispatch} = useAuthContext();

    const {dispatch:listDispatch} = useListContext();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({type:"LOGOUT"});
        listDispatch({type:"SET_LISTS",payload:null})
    }
    return {logout};
}