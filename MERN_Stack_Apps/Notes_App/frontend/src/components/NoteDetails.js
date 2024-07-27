import { useNoteContext } from "../hooks/useNoteContext";

const NoteDetails = ({e_note}) => {

    const {dispatch} = useNoteContext();

    const handleDel = async () => {

        const resp = await fetch(`/api/notes/${e_note._id}`,{method:"DELETE"});
        const json = await resp.json();

        if (resp.ok)
        {
            dispatch({type:"DELETENOTE",payload:json});
        }

    }

    return (
        <div className="each_note">
            <h3>{e_note.title}</h3>
            <hr />
            <p>{e_note.note_con}</p>
            <button onClick={handleDel}>delete</button>
        </div>
    )
}

export default NoteDetails;