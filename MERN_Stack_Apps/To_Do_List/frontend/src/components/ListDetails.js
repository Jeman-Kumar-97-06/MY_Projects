import { useEffect, useState } from "react";
const ListDetails = ({l_e}) => {
    const def_tit = l_e.title;
    const [listit,setListit] = useState(l_e.list);
    const [deltasks,setDeltasks] = useState(l_e.dellis);
    const [newtask,setNewtask] = useState('');

    //what to do when a task is checked 'done'
    const removefromList = (e) => {
        if(e.target.checked){
            //Add the checked task to list of 'deleted_tasks'
            deltasks.push(e.target.id);
            setDeltasks(deltasks);
            //Remove the checked tak from the existing list of tasks and update the list
            listit.splice(listit.indexOf(e.target.id),1);
            setListit([...listit]);
            //Remove the checked mark
            e.target.checked = false;
        }
        else{
            console.log('unchecked')
        }
    }

    //what to do when a checked task is clicked again to undone
    const addfromList = (e) => {
        if (!e.target.checked)
        {
            listit.push(e.target.id);
            setListit([...listit]);
            deltasks.splice(deltasks.indexOf(e.target.id),1);
            setDeltasks([...deltasks]);
            
        }
    }

    const addNewTask = (e) => {
        e.preventDefault();
        if(newtask.length!=0){
            listit.push(newtask);
            setListit([...listit]);
        }
        else{
            alert('Task String Length 0')
        }
        
    }

    //Run the function inside 'useEffect' every time there's a change in listit or deltasks
    useEffect(()=>{
        const upd_lis = {title:def_tit,list:listit,dellis:deltasks};
        fetch(`http://localhost:4000/api/todolists/${l_e._id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(upd_lis)})
            .then(()=>{console.log('updated successfully')})
            .catch(err=>{console.log(err)})
                  },[listit,deltasks])

    //Finally,              
    return (
        <div className="each_lis_detail" key={l_e._id} id={l_e._id}>

            {/* Each List Title */}
            <h2>{l_e.title}</h2>

            {/* Rendering Each Task : */}
            <form className="each_task">
                {/* Rendering tasks that are un-checked */}
                {
                    listit.map((l_e_l)=>(
                        <div>
                            <input type="checkbox" id={l_e_l} onClick={e=>removefromList(e)}/>
                            <label htmlFor={l_e_l}>{l_e_l}</label>
                        </div>
                                          ))
                }
                <hr />
                {/* Rendering tasks that are completed ie., checked */}
                {
                    deltasks.map((l_e_l)=>(
                        <div>
                            <input type="checkbox" id={l_e_l} onClick={e=>addfromList(e)} defaultChecked/>
                            <label htmlFor={l_e_l} style={{textDecoration:"line-through"}}>{l_e_l}</label>
                        </div>
                                          ))
                } 
            </form>
            
            {/* Form to create a new task inside an existing ToDoList */}
            <form className="addNewTask" onSubmit={addNewTask}>
                    <input type="text" placeholder="Add New Task" onChange={e=>{setNewtask(e.target.value);}}/>
                    <button type="submit">Create New Task</button>
            </form>          
        </div>
    )
}

export default ListDetails;