
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
            </tr>
            {cartitems && cartitems.map(ci=>(
                <tr>
                    {/* The following is book names */}
                    <td>{Object.keys(ci)[0]}</td>
                    {/* The following is books quantity */}
                    <td><input type='number' value={Object.values(ci)[0]}/></td>
                    {/* The following is book prices */}
                    <td>{Number(prices[Object.keys(ci)[0]])*Object.values(ci)[0]}</td>
                </tr>
            ))}
        </table>
        <button className="update_cart_btn">Update Cart</button>
        <button className="update_cart_btn">Checkout</button>
        </div>
    )
};

export default CartDets;