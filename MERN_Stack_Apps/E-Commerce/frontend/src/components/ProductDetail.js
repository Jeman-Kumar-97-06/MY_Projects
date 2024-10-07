import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const ProductDetails = ({prod}) => {
    const {user}                 = useAuthContext();
    const [quantity,setQuantity] = useState(1);
    const [error,setError]       = useState(null);
    const handleAdd = async (e) => {
        e.preventDefault()
        const pt  = {};
        pt[prod.title] = quantity;
        const resp = await fetch('/api/carts',{method:"POST",
                                               headers:{"Content-Type":"application/json",'Authorization':`Beared ${user.token}`},
                                               body:JSON.stringify({pt})
                                               })
        const json = await resp.json();
        if(!resp.ok){
            setError(json.error);
            window.alert(error);
        }
        if(resp.ok){
           setError(null);
        }
        setQuantity(1)
    }
    return (
        <div className="card">
            <div className="prod_image">
                <img src={prod.img} alt="Product" styles={{"width":"100%"}}/>
            </div>
            <div className="prod_dets">
                <span><h4>{prod.title}</h4></span>
                <span className="prod_author">{prod.author}</span>
                <p className="price">₹ {prod.price}</p>
                <form onSubmit={handleAdd} className='add_cart_form'> 
                    <input type='number' value={quantity} onChange={e=>{setQuantity(quantity+1)}}/>
                    <button>Add to Cart</button>
                </form>
            </div>
        </div>
    )
};

export default ProductDetails;