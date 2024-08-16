import {createContext} from 'react';
const todolistContext = createContext();
const todolistContextProvider = ({children}) => {
    <todolistContext.Provider>
        {children}
    </todolistContext.Provider>
}