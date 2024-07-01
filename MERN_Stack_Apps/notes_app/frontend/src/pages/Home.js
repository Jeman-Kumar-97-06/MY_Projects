import {useEffect} from 'react';
import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';
import { useNoteContext } from '../hooks/useNoteContext';

const Home = () => {

    const {notes,dispatch} = useNoteContext();

    useEffect(()=>{
        
        const fetchNotes = async() => {
            const response = await fetch('/notes');
            const json     = await response.json();
            if(response.ok)
                {
                    dispatch({type:'SET_NOTES',payload:json});
                }
        };
        fetchNotes();
    },[dispatch])
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