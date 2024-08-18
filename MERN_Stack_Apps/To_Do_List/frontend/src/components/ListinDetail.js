import { useState } from "react";

const ListinDetail = ({list}) => {

    const [new_task,setNew_task] = useState('');

    const [error,setError]       = useState(null);

    const handleDel = async (id) => {
        const resp = await fetch('/api/todolists/'+id,{method:'DELETE'});
        if(resp.ok){
            console.log("Deleted Successfully");
        }
    }

    const addNewTask = async (e) => {
        e.preventDefault();
        const updatedList = {title:list.title,list:[...list.list,new_task]}
        const resp        = await fetch('/api/todolists/'+list._id,{method:"PATCH",body:JSON.stringify(updatedList),headers:{'Content-Type':'application/json'}});
        const json        = await resp.json();
        if (!resp.ok){
            setError(json.error);
        }
        if (resp.ok) {
            setError(null);
            setNew_task('');
        }
    }

    return (
        <div>
            <h2>{list.title}</h2>
            <form>
                
            </form>
            <ul>
                {list.list.map(l=>(
                    <li>{l}</li>
                ))}
            </ul>

            <form onSubmit={addNewTask}>
                <input type="text" value={new_task} onChange={e=>setNew_task(e.target.value)}/>
                <button type="submit">Add Task</button>
                {error && <p>{error}</p>}
            </form>

            <button onClick={e=>{handleDel(list._id)}}>Delete</button>
        </div>
    )
}

export default ListinDetail;