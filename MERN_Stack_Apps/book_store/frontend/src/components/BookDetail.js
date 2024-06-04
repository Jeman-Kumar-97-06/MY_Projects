import { useState } from 'react';
import {useAuthContext} from '../hooks/useAuthContext';

const BookDetail = ({bok}) => {
    const {user}           = useAuthContext();
    const [noOfI,setNoOfI] = useState(0);
    
    const handleAddToCart = async (x) => {
        const userid_yo   = user.useridyo;
        const cartItem_yo = {userid_yo,x};
        //setting initial state of no of items to the number of items already in cart
        const resp_c      = await fetch(`/book_store/cart/${userid_yo}`,{headers:{'Authorization':`Bearer ${user.token}`}});
        const resp_c_js   = await resp_c.json();
        console.log(resp_c_js.length);
        //adding an item to cart
        const response    = await fetch(`/book_store/cart/${userid_yo}`,{method:'POST',body:JSON.stringify({...cartItem_yo}),headers:{'Content-Type':"application/json",'Authorization':`Bearer ${user.token}`}});
        if(!response.ok)
            {
                console.log("Something Went Wrong!");
            }
        if(response.ok)
            {
                console.log('Added Successfully!')
                setNoOfI(noOfI+1);
            }
        // const email = user.email;
        // const cart_item_yo = {email,x};
        // const response     = await fetch(`/book_store/cart/${user.}`)
    }
    return (
        <div className="each_book">
            <img className="each_book_img" src={bok.image} alt="book"></img>
            <h3 className="each_book_title">{bok.title}</h3>
            <p className="each_book_author">{bok.author}</p>
            <p className="each_book_price">&#8377;{bok.price}</p>
            <button className="each_book_add" onClick={()=>handleAddToCart(bok._id)}>Add to Cart</button>
        </div>
    )
}
export default BookDetail;