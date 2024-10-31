import CartItem from "../components/CartItem";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";
import { useEffect } from "react";
const CartDets = () => {
    const {user} = useAuthContext();
    const {cart_items,dispatch}  = useCartContext();
    useEffect(()=>{
        const fetchCart = async () => {
            const resp  = await fetch('/api/carts',{headers:{"Authorization":`Bearer ${user.token}`}});
            const cart  = await resp.json();
            if (resp.ok) {
                dispatch({type:"SET_CART_ITEMS",payload:cart.resps});
            }
        }
        if (user) {
            fetchCart();
        }
    },[user,dispatch])

    return(
        <div className="cart_page">
        <table className='cart_page'>
            <tr>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
                <th></th>
                <th></th>
            </tr>
            {cart_items && cart_items.map(ci=>(
                <CartItem key={ci.prod_name} ci={ci}/>
            ))}
            <tr>
                <td>Total</td>
                <td>{cart_items && cart_items.reduce((total,itm)=>total+itm.quantity,0)}</td>
                <td>{cart_items && cart_items.reduce((total,itm)=>total+Number(itm.price)*Number(itm.quantity),0)}</td>
                <td><button>Pay</button></td>
            </tr>
        </table>
        </div>
    )
};

export default CartDets;