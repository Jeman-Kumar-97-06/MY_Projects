import {useEffect,useState} from 'react';
import ListDetails from '../components/ListDetails';


const HomePage = () => {
    const [lists,setLists] = useState(null);
    const [newtitle,setNewtitle] = useState('');
    //The following useEffect hook will run 'fetchLists' everytime the page is loaded.
    //The fetchLists will fetch all the lists from the MongoDB
    useEffect(()=>{
        const fetchLists = async () => {
            const response = await fetch('api/todolists');
            const json     = await response.json();
            if (response.ok)
            {
                setLists(json);
            }
        }
        fetchLists();
    },[lists]);

    //What to do when 'Delete' is clicked:
    const deleteTasksList = (id) => {
        fetch(`http://localhost:4000/api/todolists/${id}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})
            .then(()=>{console.log('Deleted successfully')})
            .catch(err=>{console.log(err)})
    }

    const createList = (e) => {
        e.preventDefault();
        const new_create_list = {title:newtitle,list:[],dellis:[]}
        fetch(`http://localhost:4000/api/todolists/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(new_create_list)})
            .then(()=>{console.log('Added new list successfully')})
            .catch(err=>{console.log(err)})
    }

    return (
        <div className="home_div">
            <div>
                <form className='createForm' onSubmit={createList}>
                    <input type='text'placeholder='Add Title First to Create a ToDoList' onChange={e=>{setNewtitle(e.target.value)}}/><br />
                    <button type='submit'>Save</button>
                </form>
                {lists && lists.map((l)=>(
                    <div>
                        <ListDetails key={l._id} l_e={l}/>
                        <button onClick={e=>{deleteTasksList(l._id)}}>Delete</button>
                    </div>
                    
                ))}
            </div>
        </div>
    )
};

export default HomePage;