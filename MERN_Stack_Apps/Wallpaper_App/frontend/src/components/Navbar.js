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
                    <a href="#">Login</a>
                    <a href="#">Signup</a>
                </div>
            )}
            
            {user && (
                <div className="nav_2">
                    <a href="#">{user.name}'s uploads</a>
                    <button onClick={handleLogout}>Logout</button>
                    <button><span class="material-icons">contrast</span></button>
                </div>
            )}
        </div>
    )
}

export default Navbar;