import { useState } from "react";
import { useListContext } from "../hooks/useListContext";
import { useAuthContext } from "../hooks/useAuthContext";

const NewToDoList = ({fL}) => {
    const [title,setTitle] = useState('');
    //const [list,setList]   = useState([]);
    const [error,setError] = useState(null);

    const {user}           = useAuthContext();

    const {dispatch}       = useListContext();

    //FUNCTION TO CREATE A NEW TASKLIST
    const handleSubmit = async (e) => {
        e.preventDefault();
        const new_list = {title};
        const resp     = await fetch('/api/todolists',{method:"POST",body:JSON.stringify(new_list),headers:{"Content-Type":"application/json",'Authorization':`Bearer ${user.token}`}});
        const json     = await resp.json();
        if(!resp.ok){
            setError(json.error);
        }
        if(resp.ok){
            console.log(json)
            setError(null);
            dispatch({type:"CREATE_LIST",payload:json});
            setTitle('');
        }
    }
    return (
        <form className="new_todo_list" onSubmit={handleSubmit}>
            <h4>Add New List:</h4>

            <div className="input-submit">
                <label className="tasklist-title">Title:</label>
                <input type='text' onChange={e=>setTitle(e.target.value)} value={title}/>

                <button type="submit" className="tasklist-title-submit">+</button>
            </div>
            

            {error && <p>{error}</p>}

        </form>
    )
}

export default NewToDoList;