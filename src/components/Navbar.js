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
            <Link to='/' className='book_store'>Book Store</Link>
            {!user && (
                <div className='remain_nav'>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            )}
            {user && (
                <div className='remain_nav'>
                    <Link to='/cart'>{user.user.name}'s cart</Link>
                    <a onClick={handleLogout}>Logout</a>
                    <Link to='/about'>About</Link>
                </div>
            )}
            
        </div>
    )
}

export default Navbar