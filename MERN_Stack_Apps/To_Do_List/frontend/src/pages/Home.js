import {useEffect} from 'react';
import ListinDetail from '../components/ListinDetail';
import NewToDoList from '../components/NewToDoList';
import {useListContext} from '../hooks/useListContext';
const Home = () => {
    const {lists,dispatch} = useListContext();
    useEffect(()=>{
        const fetchLists = async () => {
            console.log('ran this')
            const resp = await fetch('/api/todolists');
            const json = await resp.json();
            if(resp.ok){
                dispatch({type:"SET_LISTS",payload:json});
            }
        }
        fetchLists();
    },[dispatch])

     

    return (
        <div className='home_page'>
            <h2>Welcome User!</h2>
            <NewToDoList/>
            <div className='all_lists'>
                {lists && lists.map(l=>(
                    <ListinDetail key={l._id} list={l}/>
                ))}
            </div>
            
        </div>
    )
}

export default Home;