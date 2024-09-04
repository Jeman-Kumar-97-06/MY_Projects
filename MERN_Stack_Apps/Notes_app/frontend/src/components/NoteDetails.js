import { useState } from "react";
import { useNoteContext } from "../hooks/useNoteContext";

const NoteDetails = ({nt}) => {

    const [newtitle,setNewtitle] = useState(nt.title);
    const [newbody,setNewbody]   = useState(nt.body);

    const {dispatch} = useNoteContext();
    const handleDel = async () => {
        const resp = await fetch('/api/notes/'+nt._id,{method:'DELETE'});
        const json = await resp.json();
        if(resp.ok){
            dispatch({type:"DELETE_NOTE",payload:json})
        }
    };


    const handleUpdate  = () => {
        console.log(newtitle);
        console.log(newbody);
    }

    return (
        <div className='nt_det'>
            <h4 autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" contentEditable='true' suppressContentEditableWarning="true" onInput={(e)=>{document.querySelector(`#updtebtn${nt._id}`).style.display='inline-block';setNewtitle(e.target.value)}} value={newtitle}>{newtitle}</h4>
            <hr/>
            <p autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" contentEditable='true' suppressContentEditableWarning="true" onInput={(e)=>{document.querySelector(`#updtebtn${nt._id}`).style.display='inline-block';setNewbody(e.target.value)}} value={newbody}>{newbody}</p>
            <button onClick={handleDel} className="del_note_btn">Delete</button>
            <button id={`updtebtn${nt._id}`} style={{display:'none'}} onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default NoteDetails;