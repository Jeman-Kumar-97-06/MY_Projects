import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const ProdInDetails = () => {
    const {id} = useParams();
    const [pd,setPd] = useState('');

    useEffect(()=>{
        const fetchProduct = async (id) => {
            
            const resp = await fetch(`http://localhost:4000/api/products/${id}`); 
            const json = await resp.json();
            if(resp.ok)
            {
                setPd(json);
            }
        };
        fetchProduct(id);
    },[]);

    return (
        <div className="details_det">
            <div className="det_img_div">
                <img className="img_div" src={pd.prod_img} alt="" />
            </div>
            <div>
                <h1>{pd.prod_name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa qui quis fuga quos quam minus nulla autem hic, doloribus possimus </p>
                <div className="no_of_units">
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                    <button>Buy</button>
                </div>
                
            </div>
        </div>
    )
};

export default ProdInDetails;