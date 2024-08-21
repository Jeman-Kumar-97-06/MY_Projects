import { useEffect, useState } from "react";

const ListinDetail = ({list,fL}) => {


    const [listoftasks,setListoftasks]       = useState(list.list);
    const [listofdeltasks,setListofdeltasks] = useState(list.dellis);

    const [new_task,setNew_task]             = useState('');

    const [error,setError]                   = useState(null);

    //DELETES A WHOLE LIST WHEN CLICKED ON DELETE BUTTON
    const handleDel = async (id) => {
        const resp = await fetch('/api/todolists/'+id,{method:'DELETE'});
        if(resp.ok){
            console.log("Deleted Successfully");
            fL();
        }
    }

    //sends PATCH request and fetches updated data again.
    useEffect(()=>{
        const getupdatedList = async () => {
            const updatedList = {title:list.title,list:listoftasks,dellis:listofdeltasks};
            const resp        = await fetch('/api/todolists/'+list._id,{method:'PATCH',body:JSON.stringify(updatedList),headers:{'Content-Type':'application/json'}});
            const json        = resp.json();
            if (resp.ok){
                fL();
            }
            if (!resp.ok){
                setError(json.error);
            }
        }
        getupdatedList();
    },[listofdeltasks,listoftasks])

    //THE FOLLOWING FUNCTION ADDS A NEW TASK TO AN EXISTING LIST
    const addNewTask = async (e) => {
        e.preventDefault();
        setListoftasks([...listoftasks,new_task]);
    }

    //Function to remove a task
    const removeTask = async (e) => {
        let x = [...listoftasks];
        x.splice(x.indexOf(e.target.value),1);
        setListoftasks(x);
        setListofdeltasks([...listofdeltasks,e.target.value])
        e.target.checked = false;
    }  
    //Function to re-add a finished/removes task
    const readdTask = async (e) => {
        let x = [...listofdeltasks];
        x.splice(x.indexOf(e.target.value),1);
        setListofdeltasks(x);
        setListoftasks([...listoftasks,e.target.value]);
    }

    //RETURN STATEMENT
    return (
        <div>
            <h2>{list.title}</h2>
            {/* Rendering list of tasks */}
            <div>
                {listoftasks.map(l=>(
                    <div>
                        <input type="checkbox" id={l} value={l} onChange={removeTask} />
                        <label htmlFor={l}>{l}</label>
                    </div>
                    
                ))}
            </div>
                <hr/>
            {/* Rendering list of del tasks */}
            <div>
                {listofdeltasks.map(dl=>(
                    <div>
                        <input type="checkbox" id={dl} value={dl} onChange={readdTask} checked/>
                        <label htmlFor={dl} style={{textDecoration:"line-through"}} >{dl}</label>
                    </div>
                    
                ))}
            </div>

            {/* Form to add new task */}
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