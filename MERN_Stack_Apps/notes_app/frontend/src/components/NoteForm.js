import {useState} from 'react';
const NoteForm = () => {
    const [title,setTitle] = useState('')
    const [note_con,setNote_con]= useState('');
    const [error,setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const note = {title,note_con};
        const response = await fetch('/notes',{method:"POST",body:JSON.stringify(note),headers:{'Content-Type':'application/json'}})
        const json     = await response.json();
        if(!response.ok){

            setError(json.error); 
        }
        if(response.ok){
            setTitle('');
            setNote_con('');
            setError(null);
            console.log('new workout added',json);
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new note</h3>

            <label>Note Title</label>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}/>

            <label>Note Content</label>
            <input type='text' onChange={(e)=>setNote_con(e.target.value)} value={note_con}/>
            
            <button type='submit'>Add Note</button>
            {error && <div className='error_create'>{error}</div>}
        </form>
    )
}
export default NoteForm;