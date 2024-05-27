const DetailsEach = ({des}) => {
    return (
        <div className="details-each">
            {des.map(de=>(
                <div key={de.id}>
                    <h4>{de.name}</h4>
                    <p>{de.age}</p>
                    <p><i>{de.gen}</i></p>
                </div>
            ))}
        </div>
    )
}
export default DetailsEach