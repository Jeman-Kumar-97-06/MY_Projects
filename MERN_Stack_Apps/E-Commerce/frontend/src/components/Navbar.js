import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav_div">
            <Link to='/'>Navbar</Link>
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
            <div>
                <button>My Cart</button>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar