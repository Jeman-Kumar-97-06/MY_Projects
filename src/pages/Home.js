import { useEffect } from "react";
import { useProductsContext } from "../hooks/useProductsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import ProductDetails from '../components/ProductDetail'

const Home = () => {
    const {products,dispatch} = useProductsContext();
    const {user}              = useAuthContext();
    
    

    useEffect(()=>{    
        const fetchAllProds = async () => {
            const resp  = await fetch('/api/products',{headers:{"Authorization":`Bearer ${user.token}`}});
            const prods = await resp.json();
            if (resp.ok) {
                dispatch({type:"SET_PRODS",payload:prods});
            }
        }
        if (user) {
            fetchAllProds();
        }
    },[dispatch,user])


    const handlePLtoH = () => {
        dispatch({type:"SORT_BY_PRICE_L_H"})
    }

    const handlePHtoL = () => {
        dispatch({type:"SORT_BY_PRICE_H_L"})
    }

    const handleByName = () => {
        dispatch({type:"SORT_BY_NAME"});
    }

    const handleFeatured = async () => {
            const resp  = await fetch('/api/products',{headers:{"Authorization":`Bearer ${user.token}`}});
            const prods = await resp.json();
            if (resp.ok) {
                dispatch({type:"SET_PRODS",payload:prods});
            }
    }

    return (
        <div className="home_div">            
            <div className="filter_btns">
                <div className="dropdown">
                    <button className="dropbtn">Category</button>
                    <div className="dropdown-content">
                        <p onClick={()=>{dispatch({type:"CATEGORIZE",payload:'Educational'})}}>Educational</p>
                        <p onClick={()=>{dispatch({type:"CATEGORIZE",payload:"Science Fiction"})}}>Science Fiction</p>
                        <p onClick={()=>{dispatch({type:"CATEGORIZE",payload:"Comedy"})}}>Comedy</p>
                    </div>
                </div>
                <div className='dropdown'>
                    <button className='dropbtn'>Sort</button>
                    <div className='dropdown-content'>
                        <p onClick={handleFeatured}>Featured</p>
                        <p onClick={handleByName}>By Name</p>
                        <p onClick={handlePLtoH}>By Price : Low to High</p>
                        <p onClick={handlePHtoL}>By Price : High to Low</p>
                    </div>
                </div>
            </div>
            <div className="all_prods">
                {!products && <div className='wait_div'>Please wait. The server response is slow.😿</div>}
                {products && products.map(prod=>(
                    <ProductDetails prod={prod} key={prod._id}/>
                ))}
            </div>
        </div>
    )
}

export default Home;