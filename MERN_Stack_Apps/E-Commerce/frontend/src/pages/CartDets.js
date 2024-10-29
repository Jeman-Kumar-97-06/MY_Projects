
import CartItem from "../components/CartItem";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
const CartDets = () => {
    const {user} = useAuthContext();
    const [cartitems,setCartitems] = useState(null);
    const [prices,setPrices]       = useState(null);

    useEffect(()=>{
        const fetchCart = async () => {
            const resp  = await fetch('/api/carts',{headers:{"Authorization":`Bearer ${user.token}`}});
            const cart  = await resp.json();
            if (resp.ok) {
                console.log(cart)
                setCartitems(cart.cart[0].products)
                setPrices(cart.prices)
            }
        }
        if (user) {
            fetchCart();
        }
    },[user])

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
            {cartitems && cartitems.map(ci=>(
                <CartItem key={ci._id} ci={ci} prices={prices}/>
            ))}
        </table>
        </div>
    )
};

export default CartDets;