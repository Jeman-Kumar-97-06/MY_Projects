import { useEffect, useState } from "react";
import { useListContext } from "../hooks/useListContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ListinDetail = ({list}) => {

    const {user}                             = useAuthContext();

    const [listoftasks,setListoftasks]       = useState(list.list);
    const [listofdeltasks,setListofdeltasks] = useState(list.dellis);

    const [new_task,setNew_task]             = useState('');

    const [error,setError]                   = useState(null);

    const {dispatch}                         = useListContext();

    //DELETES A WHOLE LIST WHEN CLICKED ON DELETE BUTTON
    const handleDel = async () => {
        const resp = await fetch('/api/todolists/'+list._id,{method:'DELETE',headers:{'Authorization':`Bearer ${user.token}`}});
        const json = await resp.json();
        if(resp.ok){
            dispatch({type:"DELETE_LIST",payload:json})
        }
    }

    //sends PATCH request and fetches updated data again.
    useEffect(()=>{
        const getupdatedList = async () => {
            const updatedList = {list:listoftasks,dellis:listofdeltasks};
            const resp        = await fetch('/api/todolists/'+list._id,
                                            {
                                             method:'PATCH',body:JSON.stringify(updatedList),
                                             headers:{
                                                      'Content-Type':'application/json',
                                                      'Authorization':`Bearer ${user.token}`
                                                      }
                                            }
                                            );
            const json        = await resp.json();
            
            if (resp.ok){
                setError(null);
                dispatch({type:"UPDATE_LIST",payload:json})
            }
            if (!resp.ok){
                setError(json.error);
            }
        }
        getupdatedList();
    },[listofdeltasks,listoftasks,dispatch,list._id,user])

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
        <div className='list_in_det'>
            <h2 className="list_title">{list.title}</h2>
            {/* Rendering list of tasks */}
            <div>
                {listoftasks && listoftasks.map(l=>(
                    <div>
                        <input type="checkbox" id={l} value={l} onChange={removeTask} />
                        <label htmlFor={l}>{l}</label>
                    </div>
                    
                ))}
            </div>
                <hr/>
            {/* Rendering list of del tasks */}
            <div>
                {listofdeltasks && listofdeltasks.map(dl=>(
                    <div>
                        <input type="checkbox" id={dl} value={dl} onChange={readdTask} checked/>
                        <label htmlFor={dl} style={{textDecoration:"line-through"}} >{dl}</label>
                    </div>
                    
                ))}
            </div>

            {/* Form to add new task */}
            <form onSubmit={addNewTask}>
                <input type="text" value={new_task} onChange={e=>setNew_task(e.target.value)}/>
                <button type="submit" className="add_task_btn">Add Task</button>
                {error && <p>{error}</p>}
            </form>

            <button onClick={handleDel} className="del_task_btn"><span class="material-symbols-outlined">delete</span></button>
        </div>
    )
}

export default ListinDetail;