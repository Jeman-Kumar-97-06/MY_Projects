const NoteDetails = ({each_note}) => {
    return (
        <div key={each_note._id}>
            <h3>{each_note.title}</h3>
            <p>{each_note.note_con}</p>
        </div>
    )
};
export default NoteDetails;