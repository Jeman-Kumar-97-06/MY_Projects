import { createContext,useReducer } from "react";

export const CartContext = createContext();

export const cartReducer = (state,action) => {
    switch(action.type) {
        case "REMOVE_FROM_CART":
            return {
                cart_items : state.cart_items.filter(itm => itm._id !== action.payload._id)
            }
        case "UPDATE_CART":
            // get the item to be updated
            const item_upd  = state.carts_items.filter(itm => itm._id === action.payload._id);
            // get that item's index
            const item_indx = state.cart_items.indexOf(item_upd[0]);
            // replace that item with the updated item/ item count
            
    }
}