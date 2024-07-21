const ListDetails = ({l_e}) => {
    return (
        <div className="each_lis">
            <h2>{l_e.title}</h2>
            <ul>
            {
              l_e.list.map((l_e_l)=>(
                    <li>{l_e_l}</li>
                ))
            }
            </ul>
            <button><a href="#">Delete</a></button>
            <button><a href="#">Save</a></button>
        </div>
    )
}

export default ListDetails;