import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav_div">
            <h1>Navbar</h1>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='#'>User</Link>
            <Link to='/logout'>Logout</Link>
        </div>
    )
};

export default Navbar;