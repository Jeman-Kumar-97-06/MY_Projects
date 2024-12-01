import { useReducer,createContext } from "react";

export const ProductsContext = createContext();

export const productsReducer = (state,action) => {
    switch(action.type){
        case "SET_PRODS":
            return {products:action.payload};
        case "CREATE_PRODS":
            return {products:[action.payload,...state.products]};
        case "CATEGORIZE":
            console.log(state.products.length);
            let cat_state = structuredClone(state.products);
            return {products:cat_state.filter((p)=>p.category === action.payload )}
        case "SORT_BY_PRICE_L_H":
            state.products.sort((a,b)=>{return a.price-b.price})
            return {products : state.products};
        case "SORT_BY_PRICE_H_L":
            state.products.sort((a,b)=>{return b.price-a.price});
            return {products : state.products};
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