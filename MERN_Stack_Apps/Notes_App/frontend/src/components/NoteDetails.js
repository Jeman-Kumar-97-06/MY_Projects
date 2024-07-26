const NoteDetails = ({e_note}) => {
    return (
        <div className="each_note">
            <h3>{e_note.title}</h3>
            <p>{e_note.note_con}</p>
        </div>
    )
}

export default NoteDetails;