import {useAuthContext} from '../hooks/useAuthContext';
const BookDetail = ({bok}) => {
    const {user} = useAuthContext();
    const handleAddToCart = async (x) => {
        const id = user._id
        console.log(id);
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