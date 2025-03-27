import {useAuthContext} from './useAuthContext';
import {useProductContext} from './useProductContext';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:prodContext} = useProductContext();
    const logout = () => {
        localStorage.removeItem('ref_user');
        dispatch({type:"LOGOUT"});
        prodContext({type:"SET_PRODS",payload:null});
    }
    return {logout};
};