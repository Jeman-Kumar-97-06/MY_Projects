import {createContext, useReducer} from 'react';

export const PromptsContext = createContext();

export const promptsReducer = (state,action) => {
    switch(action.type){
        case 'SET_PROMPTS':
            return {
                prompts : action.payload
            }
        default:
            return state
    }
};

export const PromptsContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(promptsReducer,{prompts:null});
    return (
        <PromptsContext.Provider value={{...state,dispatch}}>
            {children}
        </PromptsContext.Provider>
    )
}