import {useEffect, useState} from 'react';
import EachProduct from '../components/EachProduct';
const Home = () => {
    const [prods,setProds] = useState(null);

    useEffect(()=>{
        const fetchProds = async () => {
            console.log('ke,amn');
            const resp = await fetch('/api/products');
            
            const json = await resp.json();
            
            if (resp.ok) {
                setProds(json);
            }
        }
        fetchProds();
    },[]);

    return (
        <div className="Home">
            <div className='products'>
                {prods && prods.map(p=>(
                    <EachProduct ep={p}/>
                ))}
            </div>
            
        </div>
    )
};

export default Home;