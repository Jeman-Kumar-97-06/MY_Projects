import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
const CartItem = ({ci}) => {
    //console.log(ci)
    const {user}                   = useAuthContext();
    const [quantity,setQuantity]   = useState(ci.quantity);

    const updateCart = async () => {
        ci.quantity = quantity;
        const resp = await fetch('/api/carts',{method:'PATCH',body:JSON.stringify(ci),headers:{"Content-Type":'application/json',"Authorization":`Bearer ${user.token}`}});
    }

    const deleteFromCart = () => {

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
                    <td><button onClick={updateCart}>Update</button></td>
                    {/* The following is just a DELET btn */}
                    <td><button onClick={deleteFromCart}>Delete</button></td>
        </tr>
    )
}

export default CartItem;