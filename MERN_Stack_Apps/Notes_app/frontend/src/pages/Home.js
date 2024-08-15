import { useEffect} from "react";
import NoteDetails from '../components/NoteDetails'
import { useNoteContext } from "../hooks/useNoteContext";
import NoteForm from "../components/NoteForm";
const Home = () => {
    const {notes,dispatch} = useNoteContext();
    useEffect(()=>{
        const fetchNotes = async () => {
            const resp = await fetch('/api/notes');
            const json = await resp.json()
            if(resp.ok){
                dispatch({type:"SET_NOTES",payload:json})
            }
        }
        fetchNotes()
    },[dispatch])

    return (
        <div>
            <NoteForm/>
            <div className="all_notes">
                {notes && notes.map(n=>(
                    <NoteDetails key={n._id} nt={n}/>
                ))}
            </div>
        </div>
    )
}

export default Home;