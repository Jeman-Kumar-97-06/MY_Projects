import {useEffect} from 'react';
import ListinDetail from '../components/ListinDetail';
import NewToDoList from '../components/NewToDoList';
import {useListContext} from '../hooks/useListContext';
import { useAuthContext } from '../hooks/useAuthContext';
const Home = () => {
    const {user}           = useAuthContext();
    const {lists,dispatch} = useListContext();

    useEffect(()=>{
        const fetchLists = async () => {
            const resp = await fetch('/api/todolists',{headers:{'Authorization':`Bearer ${user.token}`}});
            const json = await resp.json();
            if(resp.ok){
                dispatch({type:"SET_LISTS",payload:json});
            }
        }
        if (user) {
            fetchLists();
        }
    },[dispatch,user])

     

    return (
        <div className='home_page'>
            <NewToDoList/>
            <div className='all_lists'>
                {!lists && <div>Please wait. The server response is slow.😿</div>}
                {lists && lists.map(l=>(
                    <ListinDetail key={l._id} list={l}/>
                ))}
            </div>
            
        </div>
    )
}

export default Home;