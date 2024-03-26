const Home = (props) => {
    const rend_cont = props.food;
    return (
        <div className='home'>
            {rend_cont.map(foo => (
                <div class="eachFoodItem">
                    <h2>{foo.item}</h2>
                    <img src={`../pics/${foo.image}`}/>
                    <h5>{foo.price}</h5>
                    {foo.type.map(typ=>(
                        <button>{typ}</button>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Home;