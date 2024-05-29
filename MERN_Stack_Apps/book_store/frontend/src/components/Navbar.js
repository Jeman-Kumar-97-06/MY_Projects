import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <div className='navbar_div'>
                <Link to='/'><h1>Book Store</h1></Link>
                <div className='if_logged_in'>
                    <Link to='/cart'><p>My Cart</p></Link>
                    <Link to='/logout'><p>logout</p></Link>
                </div>
            </div>
        </header>
    )
}
export default Navbar;