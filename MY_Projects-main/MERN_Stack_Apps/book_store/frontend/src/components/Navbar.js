import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
const Navbar = () => {
    const {logout} = useLogout();
    const handleLogout = () => {
        logout();
    }
    return (
        <header>
            <div className="container">
                <Link to = '/'> <h1>Book Store</h1> </Link>
                <div className="logged_in_div">
                    <Link to = '/cart'> <p>Cart</p> </Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className='not_logged_in_div'>
                    <Link to = '/login'><p>Login</p></Link>
                    <Link to = '/signup'><p>Signup</p></Link>
                </div>
            </div>
        </header>
    )
}
export default Navbar;