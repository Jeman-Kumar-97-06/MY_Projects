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
    },[dispatch])
    return (
        <div className="home_div">            
            <div class="dropdown">
                <button class="dropbtn">Category</button>
                <div class="dropdown-content">
                    <p>Educational</p>
                    <p>Science Fiction</p>
                    <p>Comedy</p>
                </div>
            </div>
            <div className="all_prods">
                {products && products.map(prod=>(
                    <ProductDetails prod={prod} key={prod._id}/>
                ))}
            </div>
        </div>
    )
}

export default Home;