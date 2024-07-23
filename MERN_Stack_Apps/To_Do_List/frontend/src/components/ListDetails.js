import { useState } from "react";
const ListDetails = ({l_e}) => {

    const [listit,setListit] = useState(l_e.list);
    const deleted_tasks = [];
    const updateList = (e) => {
        if(e.target.checked){
            deleted_tasks.push(e.target.id);
            listit.splice(listit.indexOf(e.target.id),1);
            setListit([...listit]);
            console.log(deleted_tasks)
        }
        else{
            console.log('unchecked')
        }
    }

    return (
        <div className="each_lis">
            <h2>{l_e.title}</h2>
            <form>
                {
                    listit.map((l_e_l)=>(
                        <div>
                            <input type="checkbox" id={l_e_l} onClick={e=>updateList(e)}/>
                            <label htmlFor={l_e_l}>{l_e_l}</label>
                        </div>
                                          ))
                } 
            </form>
            <button><a href="#">Delete</a></button>
            
        </div>
    )
}

export default ListDetails;