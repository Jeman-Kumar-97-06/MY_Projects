import { useNoteContext } from "../hooks/useNoteContext";

const NoteDetails = ({nt}) => {
    const {dispatch} = useNoteContext();
    const handleDel = async () => {
        const resp = await fetch('/api/notes/'+nt._id,{method:'DELETE'});
        const json = await resp.json();
        if(resp.ok){
            dispatch({type:"DELETE_NOTE",payload:json})
        }
    }
    return (
        <div class='nt_det'>
            <h4>{nt.title}</h4>
            <hr/>
            <p>{nt.body}</p>
            <button onClick={handleDel}>Delete</button>
        </div>
    )
}

export default NoteDetails;