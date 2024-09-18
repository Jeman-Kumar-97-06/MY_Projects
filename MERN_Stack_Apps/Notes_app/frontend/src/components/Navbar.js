import { Link } from "react-router-dom";
const Navbar = () =>{
    return (
        <div className='navbar_comp'>
            <div className="nav1_2">
                <Link to='/'>Notes</Link>
            </div>
            <div className="nav2_2">
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='#'>Logout</Link>
            </div>
        </div>
    )
}

export default Navbar;