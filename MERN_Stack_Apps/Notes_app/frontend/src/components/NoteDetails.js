import { useState } from "react";
import { useNoteContext } from "../hooks/useNoteContext";

const NoteDetails = ({nt}) => {

    const [title,setTitle] = useState(nt.title);
    const [body,setBody]   = useState(nt.body);

    const [error,setError] = useState(null);

    const {dispatch} = useNoteContext();
    const handleDel = async () => {
        const resp = await fetch('/api/notes/'+nt._id,{method:'DELETE'});
        const json = await resp.json();
        if(resp.ok){
            dispatch({type:"DELETE_NOTE",payload:json})
        }
    };


    const handleUpdate  = async () => {
        const update_n = {title,body};
        const resp     = await fetch(`/api/notes/${nt._id}`,{method:"PATCH",body:JSON.stringify(update_n),headers:{'Content-Type':'application/json'}});
        const json     = await resp.json();
        if(!resp.ok){
            setError(json.error);
        }
        if(resp.ok){
            setError(null);
            console.log('note updated!')
            setTitle('');
            setBody('');
            dispatch({type:'CREATE_NOTE',payload:json});
        }
    }

    return (
        <div className='nt_det'>
            <input type='text' onChange={e=>{setTitle(e.target.value)}} value={title}/><br/>
            <textarea onChange={e=>{setBody(e.target.value)}} value={body}/><br/>
            <button onClick={handleDel} className="del_note_btn">Delete</button>
            <button id='updateBtn' onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default NoteDetails;