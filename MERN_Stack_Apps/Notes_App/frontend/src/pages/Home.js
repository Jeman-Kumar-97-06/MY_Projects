import {useEffect} from 'react';

import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';
import { useNoteContext } from '../hooks/useNoteContext';

const Home = () => {
    //The following is used when using useState.Since we can have a global notes state in NoteContext,
    //we are going to use 'useNoteContext'.
    //const [notes,setNotes] = useState(null);
    
    const {notes,dispatch} = useNoteContext();

    useEffect(()=>{
        const fetchNotes = async () => {
          const resp = await fetch('/api/notes');
          const json = await resp.json();
          if (resp.ok)
            {
                dispatch({type:'SETNOTES',payload:json})
            } 
        };
        fetchNotes();
    },[dispatch])

    return (
        <div className='home'>
            <NoteForm/>
            <div className='all_notes'>
                {notes && notes.map((e_n)=>(
                    <NoteDetails key={e_n._id} e_note={e_n}/>
                ))}
            </div>
        </div>
    )

};

export default Home;