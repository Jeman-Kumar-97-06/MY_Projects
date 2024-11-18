import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from '../hooks/useLogout';
import { Link } from "react-router-dom";

const Navbar = () => {
    const {logout} = useLogout();
    const {user}   = useAuthContext();

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="topnav">
            <Link to="/" className='active'>Home</Link>

            {!user && (
                <div className="nav_2">
                    <Link to ='/login'>Login</Link>
                    <Link to ='/signup'>Signup</Link>
                </div>
            )}
            
            {user && (
                <div className="nav_2">
                    <Link to = '#'>{user.name}'s uploads</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    )
}

export default Navbar;