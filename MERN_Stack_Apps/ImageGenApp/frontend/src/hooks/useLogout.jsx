import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    // const {dispatch:wallContext} = useWallContext();
    const logout = () => {
        localStorage.removeItem('img_gen_usr');
        dispatch({type:"LOGOUT"});
        // wallContext({type:"SETWALLS",payload:null});
    };
    return {logout};
}