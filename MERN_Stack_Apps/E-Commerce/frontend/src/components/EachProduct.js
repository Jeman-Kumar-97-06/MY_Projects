const EachProduct = ({ep}) => {
    return (
        <div className='ep_card'>
            <img src={ep.prod_image}/>
            <h4>{ep.prod_name}</h4>
            {/* <p className='product_description'>{ep.prod_desc}<span className='show_more_btn'>show more</span></p> */}
            <p>{ep.prod_price}</p>
            <button>Buy</button>
        </div>
    )
}

export default EachProduct;