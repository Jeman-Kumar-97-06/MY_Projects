import {useReducer, createContext} from 'react';

export const WallContext = createContext();

export const wallReducer = (state,action) => {
    switch(action.type) {
        case "SETWALLS":
            return {walls:action.payload}
        case "UPLOADWALLS":
            return {walls: [action.payload,...state.walls]};
        default:
            return state;
    }
};

export const WallContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(wallReducer,{walls:null});
    return (
        <WallContext.Provider value={{...state,dispatch}}>
            {children}
        </WallContext.Provider>
    )
}