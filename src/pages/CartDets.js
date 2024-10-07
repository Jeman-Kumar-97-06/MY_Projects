
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
            console.log(cart.prices)
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
        <table className='cart_page'>
            <tr>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
            </tr>
            {cartitems && cartitems.map(ci=>(
                <tr>
                    <td>{Object.keys(ci)[0]}</td>
                    <td>{Object.values(ci)[0]}</td>
                    <td>{Number(prices[Object.keys(ci)[0]])*Object.values(ci)[0]}</td>
                </tr>
            ))}
        </table>
    )
};

export default CartDets;