import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw Error("useProductsContext must be used inside compoenents that have access to ProductsContext");
    }
    return context;
}