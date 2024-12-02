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
        <table className='cart_page_table'>
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
        
        <table style={{"marginTop":"20px"}}>
            <tr>
                <th>No of Items:</th>
                <th>Total:</th>
            </tr>
            <tr>
                <td>{cart_items && cart_items.reduce((total,itm)=>total+itm.quantity,0)}</td>
                <td>₹ {cart_items && cart_items.reduce((total,itm)=>total+Number(itm.price)*Number(itm.quantity),0)}</td>
            </tr>
        </table>

        <div>
            <h4>Payment Details:</h4>
            <form className="payment">  
                <label htmlFor="name">Full Name : </label>
                <input type="string" id='name' placeholder="John Doe"/>
                <br/><br/>
                <label htmlFor='email'>Email : </label>
                <input type='email' id='email' placeholder="john@example.com"/>
                <br/><br/>
                <label htmlFor='address'>Address : </label>
                <input type='string' id='address' placeholder=""/>
                <br/><br/>
                <label htmlFor='city'>City : </label>
                <input type='string' id='city' placeholder=""/>
                <br/><br/>
                <label htmlFor='zip'>Zip Code : </label>
                <input type='string' id='zip' placeholder=""/>
                <br/><br/>
                <label htmlFor='card_name'>Name on Card  : </label>
                <input type='string' id='card_name' placeholder=""/>
                <br/><br/>
                <label htmlFor='card_number'>Card Number : </label>
                <input type='string' id='card_number' placeholder="xxxx-xxxx-xxxx"/>
                <br/><br/>
                <label htmlFor='exp_month'>Exp Month : </label>
                <input type='string' id='exp_month' placeholder=""/>
                <br/><br/>
                <label htmlFor='exp_year'>Exp Year : </label>
                <input type='string' id='exp_year' placeholder=""/>
                <br/><br/>
                <label htmlFor='cvv'>CVV : </label>
                <input type='string' id='cvv' placeholder="xxx"/>
                <br/><br/>
                <button type="submit">Proceed with payment</button>
            </form>
        </div>

        </div>
    )
};

export default CartDets;