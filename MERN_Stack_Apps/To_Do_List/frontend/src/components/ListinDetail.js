import { useEffect, useState } from "react";

const ListinDetail = ({list}) => {

    const [listoftasks,setListoftasks] = useState([...list.list]);
    const [listofdeltasks,setListofdeltasks] = useState([...list.dellis]);

    const [new_task,setNew_task] = useState('');

    const [error,setError]       = useState(null);

    //DELETES A WHOLE LIST WHEN CLICKED ON DELETE BUTTON
    const handleDel = async (id) => {
        const resp = await fetch('/api/todolists/'+id,{method:'DELETE'});
        if(resp.ok){
            console.log("Deleted Successfully");
        }
    }

    //THE FOLLOWING FUNCTION ADDS A NEW TASK TO AN EXISTING LIST
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

    useEffect(()=>{},[list.list])

    // const addORremoveTask = async (x) => {
    //     const updatedList = {title:list.title,list:[...x]};
    //     const resp        = await fetch('/api/todolists/'+list._id,{method:"PATCH",body:JSON.stringify(updatedList),headers:{'Content-Type':'application/json'}});
    //     const json        = await resp.json();
    // }

    //WHAT TO DO WHEN A CHECKBOX OF ANY OF THE LIST OF TASKS IS CHECKED OR UNCHECKED
    const handleCheck = async (e) => {
        if(e.target.checked){
            if (listoftasks.includes(e.target.value)){
                let x = [...listoftasks];
                x.splice(x.indexOf(e.target.value),1);
                setListoftasks(x)
                setListofdeltasks([...listofdeltasks,e.target.value])
            }
            
        }
        else if(!e.target.checked){
            let x= [...listofdeltasks];
            x.splice(x.indexOf(e.target.value),1);
            setListofdeltasks(x);
            setListoftasks([...listoftasks,e.target.value])
        }
    }

    return (
        <div>
            <h2>{list.title}</h2>
            {/* Rendering list of tasks */}
            <div>
                {listoftasks.map(l=>(
                    <div>
                        <input type="checkbox" id={l} value={l} onChange={handleCheck} />
                        <label htmlFor={l}>{l}</label>
                    </div>
                    
                ))}
            </div>
                <hr/>
            {/* Rendering list of del tasks */}
            <div>
                {listofdeltasks.map(dl=>(
                    <div>
                        <input type="checkbox" id={dl} value={dl} onChange={handleCheck} checked/>
                        <label htmlFor={dl} style={{textDecoration:"line-through"}} >{dl}</label>
                    </div>
                    
                ))}
            </div>

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