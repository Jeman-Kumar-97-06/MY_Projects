import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <nav className='Home'>
                <Link to='/'>Home</Link>
                <Link to='/create'>Create</Link>
                <Link to='/dets'>DetailsList</Link>
            </nav>
        </div>
        
    )
};
export default Home;