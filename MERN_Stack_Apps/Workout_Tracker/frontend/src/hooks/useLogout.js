import {useAuthContext} from './useAuthContext';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const logout = () => {
        //Remove user from localStorage:
        localStorage.removeItem('user');
        //Update Auth State:
        dispatch({type:'LOGOUT'})
    };
    return {logout};
};