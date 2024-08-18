import { useState } from "react";

const NewToDoList = () => {
    const [title,setTitle] = useState('');
    const [list,setList]   = useState([]);
    const [error,setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_list = {title};
        const resp     = await fetch('/api/todolists',{method:"POST",body:JSON.stringify(new_list),headers:{"Content-Type":"application/json"}});
        const json     = await resp.json();
        if(!resp.ok){
            setError(json);
        }
        if(resp.ok){
            setError(null);
            setTitle('');
            console.log('added')
        }
    }
    return (
        <form className="new_todo_list" onSubmit={handleSubmit}>
            <h4>Add New List:</h4>

            <label>Title:</label>
            <input type='text' onChange={e=>setTitle(e.target.value)}/>

            <button type="submit">+</button>

            {error && <p>{error}</p>}

        </form>
    )
}

export default NewToDoList;