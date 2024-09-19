import { useEffect} from "react";
import NoteDetails from '../components/NoteDetails'
import { useNoteContext } from "../hooks/useNoteContext";
import NoteForm from "../components/NoteForm";
import {useAuthContext} from '../hooks/useAuthContext';

const Home = () => {
    const {notes,dispatch} = useNoteContext();
    const {user}           = useAuthContext();
    useEffect(()=>{
        const fetchNotes = async () => {
            const resp = await fetch('/api/notes',{headers:{'Authorization':`Bearer ${user.token}`}});
            const json = await resp.json()
            if(resp.ok){
                dispatch({type:"SET_NOTES",payload:json})
            }
        }
        //Run fetchNotes() only if a user is logged in:
        if (user) {
            fetchNotes()
        }
        
    },[dispatch,user])

    return (
        <div>
            {user && <NoteForm/>}
            <div className="all_notes">
                {notes && notes.map(n=>(
                    <NoteDetails key={n._id} nt={n}/>
                ))}
            </div>
        </div>
    )
}

export default Home;