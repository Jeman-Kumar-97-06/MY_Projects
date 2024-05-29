import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const {logout} = useLogout();
    const {user}   = useAuthContext();
    const handleLogout = () => {
        logout();
    }
    return (
        <header>
            <div className='navbar_div'>
                <Link to='/'><h1>Book Store</h1></Link>

                {!user && <div className='if_not_logged_in'>
                             <Link to='/login'><p>Login</p></Link>
                          </div>}

                {user && <div className='if_logged_in'>
                            <Link to='/cart'><p>{user.email}'s Cart</p></Link>
                            <button onClick={handleLogout}>Logout</button>
                         </div>}
                
            </div>
        </header>
    )
}
export default Navbar;