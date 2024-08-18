const ListinDetail = ({list}) => {
    const handleDel = async (id) => {
        const resp = await fetch('/api/todolists/'+id,{method:'DELETE'});
        if(resp.ok){
            console.log("Deleted Successfully");
        }
    }
    return (
        <div>
            <h2>{list.title}</h2>
            <ul>
                {list.list.map(l=>(
                    <li>{l}</li>
                ))}
            </ul>
            <button onClick={e=>{handleDel(list._id)}}>Delete</button>
        </div>
    )
}

export default ListinDetail;