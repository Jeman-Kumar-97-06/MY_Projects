import {useAuthContext} from './useAuthContext';
import {usePromptsContext} from './usePromptsContext';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:pDispatch} = usePromptsContext();
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({type:"LOGOUT"});
        pDispatch({type:"SET_PROMPTS",payload:null})
    };
    return {logout};
}