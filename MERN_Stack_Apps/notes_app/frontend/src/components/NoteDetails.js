import { useNoteContext } from "../hooks/useNoteContext";

const NoteDetails = ({each_note}) => {
    const {dispatch} = useNoteContext();
    const handleDeleteClick = async () => {
        const response = await fetch('/notes/'+each_note._id,{method:'DELETE'});
        const json     = await response.json();
        if(response.ok)
            {
                dispatch({type:"DELETE_NOTE",payload:json});
            }
    }
    return (
        <div key={each_note._id}>
            <h3>{each_note.title}</h3>
            <p>{each_note.note_con}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
};
export default NoteDetails;