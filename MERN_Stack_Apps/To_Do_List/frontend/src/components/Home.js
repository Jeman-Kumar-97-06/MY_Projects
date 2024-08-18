import {useEffect,useState} from 'react';
import ListinDetail from './ListinDetail';
const Home = () => {
    const [lists,setLists] = useState([]);
    const fetchLists = async () => {
        console.log('ran this')
        const resp = await fetch('/api/todolists');
        const json = await resp.json();
        if(resp.ok){
            setLists(json);
        }
    }
    useEffect(()=>{
        
        fetchLists();
    },[lists.length])

     

    return (
        <div className='home_page'>
            <h1>Home Page</h1>
            {lists && lists.map(l=>(
                <div>
                    <ListinDetail key={l._id} list={l}/>
                </div>
            ))}
        </div>
    )
}

export default Home;