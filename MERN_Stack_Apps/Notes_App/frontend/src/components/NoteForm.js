import {useState} from 'react';
import { useNoteContext } from '../hooks/useNoteContext';
const NoteForm = () => {
    const {dispatch}       = useNoteContext();
    const [title,setTitle] = useState('');
    const [ncon,setNcon]   = useState('');
    const [error,setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_note = {title:title,note_con:ncon};
        const resp     = await fetch('/api/notes',{method:"POST",body:JSON.stringify(new_note),headers:{'Content-Type':"application/json"}});
        const json     = await resp.json();
        if(!resp.ok)
        {
            setError(json.error);
        }
        else if(resp.ok)
        {
            setTitle('');
            setNcon('');
            setError(null);
            console.log('new note added',json);
            dispatch({type:"CREATENOTE",payload:json})
        }
    }

    return (
        <div className='createformdiv'>
            <form className="createform" onSubmit={handleSubmit}>
                <input type="text" placeholder='Title for a new note' onChange={e=>{setTitle(e.target.value)}} value={title}/>
                <textarea rows="7" cols="40" placeholder='Content of the new note' onChange={e=>{setNcon(e.target.value)}} value={ncon}></textarea>
                <button type='submit'>+</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
};

export default NoteForm;