const ProductDetails = ({prod}) => {
    return (
        <div className="card">
            <div className="prod_image">
                <img src={prod.img} alt="Product Image" styles={{"width":"100%"}}/>
            </div>
            <div className="prod_dets">
                <span><h4>{prod.title}</h4></span>
                <span className="prod_author">{prod.author}</span>
                <p class="price">₹ {prod.price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
};

export default ProductDetails;