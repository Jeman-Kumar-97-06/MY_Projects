const BookDetail = ({bok}) => {
    return (
        <div className="each_book">
            <img className="each_book_img" src={bok.image} alt="book"></img>
            <h3 className="each_book_title">{bok.title}</h3>
            <p className="each_book_author">{bok.author}</p>
            <p className="each_book_price">&#8377;{bok.price}</p>
            <button className="each_book_add">Add to Cart</button>
        </div>
    )
}
export default BookDetail;