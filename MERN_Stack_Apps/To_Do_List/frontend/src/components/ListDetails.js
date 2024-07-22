import { useState } from "react";
const ListDetails = ({l_e}) => {

    const [list_it,setList_it] = useState(l_e.list);

    const updateList = (e) => {
        const new_arr = list_it.splice(list_it.indexOf(e.target.id)-1,1);
        console.log(new_arr)
    }

    return (
        <div className="each_lis">
            <h2>{l_e.title}</h2>
            <form>
                {
                    l_e.list.map((l_e_l)=>(
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