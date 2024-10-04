import { useReducer,createContext } from "react";

export const ProductsContext = createContext();

export const productsReducer = (state,action) => {
    switch(action.type){
        case "SET_PRODS":
            return {products:action.payload};
        case "CREATE_PRODS":
            return {products:[action.payload,...state.products]};
        default:
            return state;
    }
}

export const ProductsContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(productsReducer,{products:null})
    
    return (
        <ProductsContext.Provider value={{...state,dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}