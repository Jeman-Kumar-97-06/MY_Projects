import {useContext} from 'react';
import { WallContext } from '../contexts/WallContext';

export const useWallContext = () => {
    const context = useContext(WallContext);
    if (!context) {
        throw Error("useWallContext must be used inside components that has access for WallContext");
    };
    return context;
}