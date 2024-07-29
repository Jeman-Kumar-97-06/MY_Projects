import {useEffect, useState} from 'react';
import ProductDetail from '../components/ProductDetail';
const Home = () => {
    
    const [ps,setPs] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () => {
            const resp = await fetch('http://localhost:4000/api/products');
            const json = await resp.json();
            if(resp.ok)
            {
                setPs(json);
            }
        }
        fetchProducts();
    },[]);

    return (
        <div className='home_div'>
          {ps && ps.map((p)=>(
            <ProductDetail key={p._id} pro={p}/>
          ))}  
        </div>
    )
};

export default Home;