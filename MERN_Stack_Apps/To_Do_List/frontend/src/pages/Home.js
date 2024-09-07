import {useEffect,useState} from 'react';
import ListinDetail from '../components/ListinDetail';
import NewToDoList from '../components/NewToDoList';
const Home = () => {
    const [lists,setLists] = useState([]);

    //Definition of function that fetches the all task lists
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
            <h2>Welcome User!</h2>
            <NewToDoList fL={fetchLists}/>
            <div className='all_lists'>
                {lists && lists.map(l=>(
                    <ListinDetail key={l._id} list={l} fL={fetchLists}/>
                ))}
            </div>
            
        </div>
    )
}

export default Home;