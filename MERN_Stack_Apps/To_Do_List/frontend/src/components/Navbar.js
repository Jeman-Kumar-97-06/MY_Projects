import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <div className='topnav'>
            <div className="active">
                <Link to='/'>To Do List</Link>
            </div>
                {!user && (<div>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                          </div>
                            )
                }
                {user && (<div>
                            <span className="usr_email">{user.email}</span>
                            <button onClick={handleLogout}>Logout</button>
                          </div>)}
            </div>
    )
}

export default Navbar;
