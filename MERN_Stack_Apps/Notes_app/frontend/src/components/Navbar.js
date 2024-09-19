import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
const Navbar = () =>{
    const {logout} = useLogout();
    const handleLogout = () => {
            logout();
    }
    return (
        <div className='navbar_comp'>
            <div className="nav1_2">
                <Link to='/'>Notes</Link>
            </div>
            <div className="nav2_2">
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;