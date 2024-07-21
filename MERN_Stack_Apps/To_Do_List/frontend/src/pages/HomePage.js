import {useEffect,useState} from 'react';
import ListDetails from '../components/ListDetails';


const HomePage = () => {
    const [lists,setLists] = useState(null);
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
    },[]);

    return (
        <div className="home_div">
            <div>
                {lists && lists.map((l)=>(
                    <ListDetails key={l._id} l_e={l}/>
                ))}
            </div>
        </div>
    )
};

export default HomePage;