import {useEffect,useState} from 'react';
import ListinDetail from '../components/ListinDetail';
import NewToDoList from '../components/NewToDoList';
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
            <NewToDoList/>
            {lists && lists.map(l=>(
                <ListinDetail key={l._id} list={l}/>
            ))}
        </div>
    )
}

export default Home;