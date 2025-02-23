import { useAuthContext } from "./useAuthContext";
import { useWallContext } from "./useWallContext";
export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:wallContext} = useWallContext();
    const logout = () => {
        localStorage.removeItem('wallpick_user');
        dispatch({type:"LOGOUT"});
        wallContext({type:"SETWALLS",payload:null});
    };
    return {logout};
}