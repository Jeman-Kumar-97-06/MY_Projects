import { useState } from "react"
const CartItem = ({ci,prices}) => {
    const [quantity,setQuantity]   = useState(Object.values(ci)[0]);
    return (
        <tr>
                    {/* The following is book names */}
                    <td>{Object.keys(ci)[0]}</td>
                    {/* The following is books quantity */}
                    <td><input type='number' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/></td>
                    {/* The following is book prices */}
                    <td>{Number(prices[Object.keys(ci)[0]])*Object.values(ci)[0]}</td>
                    {/* The following is just a Update btn */}
                    <td><button>Update</button></td>
                    {/* The following is just a DELET btn */}
                    <td><button>Delete</button></td>
        </tr>
    )
}

export default CartItem;