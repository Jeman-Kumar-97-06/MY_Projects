import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () =>{
    const {logout} = useLogout();
    const {user}   = useAuthContext();
    const handleLogout = () => {
            logout();
    }
    return (
        <div className='navbar_comp'>
            <div className="nav1_2">
                <Link to='/'>Notes</Link>
            </div>
            <div className="nav2_2">
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
        </div>
    )
}

export default Navbar;