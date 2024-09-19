import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const logout = () => {
        //Remove user from localStorage:
        localStorage.removeItem('user');
        //Dispatch logout action:
        dispatch({type:"LOGOUT"});
    }
    return {logout};
}