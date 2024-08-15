import { useState } from "react"
import { useNoteContext } from "../hooks/useNoteContext";
const NoteForm = () => {
    const [title,setTitle] = useState('');
    const [body,setBody]   = useState('');
    const [error,setError] = useState(null);

    const {dispatch}       = useNoteContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_note = {title,body};
        const resp     = await fetch('/api/notes',{method:"POST",body:JSON.stringify(new_note),headers:{'Content-Type':'application/json'}});
        const json     = await resp.json();
        if(!resp.ok){
            setError(json.error);
        }
        if(resp.ok){
            setError(null);
            console.log('new note added!')
            setTitle('');
            setBody('');
            dispatch({type:'CREATE_NOTE',payload:json});
        }
    }

    return (
        <form className="new_note" onSubmit={handleSubmit}>
            <h3>Add a new note:</h3>
            <label>Title:</label>
            <input type="text" onChange = {e=>{setTitle(e.target.value)}} value={title}/>
            <label>Body:</label>
            <textarea onChange={e=>{setBody(e.target.value)}} value={body}/>
            <button type='submit'>Submit</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default NoteForm;