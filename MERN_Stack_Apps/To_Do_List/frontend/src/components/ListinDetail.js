import { useState } from "react";

const ListinDetail = ({list}) => {

    const [tasks,setTasks]         = useState(list.list);
    const [del_tasks,setDel_tasks] = useState(list.dellis);

    const handleDel = async (id) => {
        const resp = await fetch('/api/todolists/'+id,{method:'DELETE'});
        if(resp.ok){
            console.log("Deleted Successfully");
        }
    }

    const addNewTask = () => {
        
    }

    return (
        <div>
            <h2>{list.title}</h2>
            <ul>
                {list.list.map(l=>(
                    <li>{l}</li>
                ))}
            </ul>
            <form className="" onSubmit={addNewTask}>
                <input type="text"/>
                <button type="submit">Add Task</button>
            </form>
            <button onClick={e=>{handleDel(list._id)}}>Delete</button>
        </div>
    )
}

export default ListinDetail;