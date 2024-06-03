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
                <Link className='nav_link' to='/'><h3>Book Store</h3></Link>

                {!user && <div className='if_not_logged_in'>
                             <Link className='nav_link' to='/login'><p>Login</p></Link>
                          </div>}

                {user && <div className='if_logged_in'>
                            <Link className='nav_link' to='/cart_items'>My Cart</Link>
                            <button className='nav_link logout_btn' onClick={handleLogout}>Logout</button>
                         </div>}
                
            </div>
        </header>
    )
}
export default Navbar;