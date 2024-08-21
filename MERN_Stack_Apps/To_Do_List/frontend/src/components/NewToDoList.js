import { useState } from "react";

const NewToDoList = ({fL}) => {
    const [title,setTitle] = useState('');
    //const [list,setList]   = useState([]);
    const [error,setError] = useState(null);

    //FUNCTION TO SUBMIT A NEW TASKLIST
    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_list = {title};
        const resp     = await fetch('/api/todolists',{method:"POST",body:JSON.stringify(new_list),headers:{"Content-Type":"application/json"}});
        const json     = await resp.json();
        if(!resp.ok){
            setError(json.error);
        }
        if(resp.ok){
            setError(null);
            setTitle('');
            console.log('added')
            fL();
        }
    }
    return (
        <form className="new_todo_list" onSubmit={handleSubmit}>
            <h4>Add New List:</h4>

            <label>Title:</label>
            <input type='text' onChange={e=>setTitle(e.target.value)} value={title}/>

            <button type="submit">+</button>

            {error && <p>{error}</p>}

        </form>
    )
}

export default NewToDoList;