import { Link } from "react-router-dom";
const Navbar = () =>{
    return (
        <div className='navbar_comp'>
            <div className="nav1_2">
                <a href='#'>Notes</a>
            </div>
            <div className="nav2_2">
                <a href='#'>Login</a>
                <a href='#'>Sign Up</a>
                <a href='#'>Logout</a>
            </div>
        </div>
    )
}

export default Navbar;