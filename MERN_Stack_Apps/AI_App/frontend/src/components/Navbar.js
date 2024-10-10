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
        <div className="nav_comp">
            <div className="home_nav">
                <Link to = '/'>AI Prompts</Link>
            </div>
            <div className='remaining_nav'>
            {!user && (<div>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                          </div>
                            )
                }
                {user && (<div>
                            <span className="usr_email">{user.user.name}</span>
                            <button onClick={handleLogout}><span class="material-symbols-outlined">logout</span></button>
                          </div>)}
            </div>
        </div>
    )
};

export default Navbar;