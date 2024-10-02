import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
    const {logout} = useLogout();
    const {user}   = useAuthContext();
    const handleLogout = () => {
            logout();
    }
    return (
        <div className="nav_div">
            <div className="app_title_div">
                <Link to='/'>Social Media</Link>
            </div>
            <div className="login_signup_logout_div">
                {!user && (<div>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                          </div>
                            )
                }
                {user && (<div>
                            <span className="usr_name">{user.user.name}</span>
                            <button onClick={handleLogout}>Logout</button>
                          </div>)}
            </div>
        </div>
    )
};

export default Navbar;