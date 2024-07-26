import {useEffect,useState} from 'react';

import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';

const Home = () => {
    const [notes,setNotes] = useState(null); 
    useEffect(()=>{
        const fetchNotes = async () => {
          const resp = await fetch('/api/notes');
          const json = await resp.json();
          if (resp.ok)
            {
                setNotes(json);
            } 
        };
        fetchNotes();
    },[])

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