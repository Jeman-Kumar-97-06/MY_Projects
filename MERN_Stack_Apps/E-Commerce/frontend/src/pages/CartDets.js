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
        </table>

        <div>
            <div className='no_of_items'>
                <h4>Items:</h4>
                <p>{cart_items && cart_items.reduce((total,itm)=>total+itm.quantity,0)}</p>
            </div>
            <div className='tot_price'>
                <h4>Total:</h4>
                <p>₹ {cart_items && cart_items.reduce((total,itm)=>total+Number(itm.price)*Number(itm.quantity),0)}</p>
            </div>
            <div className="payment">
                <h4>Payment:</h4>
                <button>GPay</button>
            </div>
        </div>

        </div>
    )
};

export default CartDets;