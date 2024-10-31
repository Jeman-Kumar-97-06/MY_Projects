import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";

const CartItem = ({ci}) => {
    const [error,setError]         = useState(null);
    const {user}                   = useAuthContext();
    const [quantity,setQuantity]   = useState(ci.quantity);
    const {dispatch}               = useCartContext();

    const updateCart = async () => {
        if (!user) {
            setError("You must be logged in");
            return;
        }
        ci.quantity = Number(quantity);
        const resp = await fetch('/api/carts',{method:'PATCH',body:JSON.stringify(ci),headers:{"Content-Type":'application/json',"Authorization":`Bearer ${user.token}`}});
        const json = await resp.json()
        if (!resp.ok){
            setError(json.error);
        }
        else if (resp.ok){
            setError(null);
            dispatch({type:"UPDATE_CART",payload:ci});
        }
    }

    const deleteFromCart = async () => {
        if (!user) {
            setError("You must be logged in");
            return;
        }
        dispatch({type:"REMOVE_FROM_CART",payload:ci})
        // const resp = await fetch(`/api/carts/${ci._id}`,{method:"DELETE",headers:{"Authorization":`Bearer ${user.token}`}});
        // const json = await resp.json();
        // if (resp.ok){
        //     dispatch({type:"REMOVE_FROM_CART",payload:json});
        // }
    }

    return (
        <tr>
                    {/* The following is book names */}
                    <td>{ci.prod_name}</td>
                    {/* The following is books quantity */}
                    <td><input type='number' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/></td>
                    {/* The following is book prices */}
                    <td>{Number(ci.price)*Number(quantity)}</td>
                    {/* The following is just a Update btn */}
                    <td><button onClick={updateCart}>{error || "Update"}</button></td>
                    {/* The following is just a DELET btn */}
                    <td><button onClick={deleteFromCart}>{error || "Delete"}</button></td>
        </tr>
    )
}

export default CartItem;