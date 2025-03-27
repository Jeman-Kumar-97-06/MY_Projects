import { useReducer,createContext } from 'react';

export const ProductContext = createContext();

export const productReducer = (state,action) => {
    switch(action.type) {
        case "SET_PRODS":
            return {products:action.payload};
        case "CREATE_PRODS":
            return {products:[action.payload,...state.products]};
        case "SORT_BY_NAME":
            state.products.sort((a,b) => {
                if (a.name < b.name) {
                    return -1;
                }
                else if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })
            return {products:state.products}
        case "SORT_BY_PRICE_L_H":
            state.products.sort((a,b)=>{return a.price-b.price});
            return {products:state.products};
        case "SORT_BY_PRICE_H_L":
            state.products.sort((a,b)=>{return b.price-a.price});
            return {products:state.products};
        default:
            return state;
    }
};

export const ProductContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(productReducer,{products:null});
    return (
        <ProductContext.Provider value={{...state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}