const ListDetails = ({l_e}) => {
    return (
        <div className="each_lis">
            <h2>{l_e.title}</h2>
            <form>
            {
              l_e.list.map((l_e_l)=>(
                <div>
                    <input type="checkbox" id={l_e_l} />
                    <label for={l_e_l}>{l_e_l}</label>
                </div>
                ))
            } 
            </form>
            <button><a href="#">Delete</a></button>
            <button><a href="#">Save</a></button>
        </div>
    )
}

export default ListDetails;