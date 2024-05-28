//AuthContext does all the stuff. But when the context is used in a place outside the scope, the app will crash. The following...
//...code prevents that by sending a Error message instead of crashing.
import {AuthContext} from '../context/AuthContext';
import { useContext} from 'react';
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context)
        {
            throw Error('useAuthContext must be used inside elements wrapped by AuthContextProvider');
        }
    return context;//returns {...state,dispatch}.
}