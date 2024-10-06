import {Link} from 'react-router-dom';
import {useLogout} from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const {logout} = useLogout();
    const {user}   = useAuthContext();
    const handleLogout = () => {
        logout();
    }

    return (
        <div className="nav_div">
            <Link to='/'>Navbar</Link>
            {!user && (
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            )}
            {user && (
                <div>
                    <button>{user.user.name}'s cart</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            
        </div>
    )
}

export default Navbar