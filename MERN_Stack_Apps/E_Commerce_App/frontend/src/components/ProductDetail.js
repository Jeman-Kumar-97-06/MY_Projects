const ProductDetail = ({pro}) => {
    return (
        <div className="each_pro">
            <img src={pro.prod_img} alt=""  className="prod_img"/>
            {/* <div className='prod_bd_img' style={{backgroundImage:`url('${pro.prod_img}')`,width:"200px",height:"200px"}}></div> */}
            <div className="prod_name_pri">
                <h4>{pro.prod_name}</h4>
                <p>{pro.prod_pri}</p>
                <a href={`/${pro._id}`}>Details</a>
            </div>
        </div>
    )
}

export default ProductDetail;