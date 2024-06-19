import {useEffect,useState} from 'react';
import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';

const Home = () => {
    const [notes,setNotes] = useState(null);

    useEffect(()=>{
        
        const fetchNotes = async() => {
            const response = await fetch('/notes');
            const json     = await response.json();
            if(response.ok)
                {
                    setNotes(json);
                }
        };
        fetchNotes();
    },[])
    return (
        <div className = 'home'>
            <div className='notes'>
                {notes && notes.map((note)=>(
                    <NoteDetails each_note = {note}/>
                ))}
            </div>
            <NoteForm/>
        </div>
    )
};
export default Home;