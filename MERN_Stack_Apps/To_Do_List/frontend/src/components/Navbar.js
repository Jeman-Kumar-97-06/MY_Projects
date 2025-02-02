import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();

    const handleLogout = async () => {
        await logout();
    }

    // const toggleButton = document.getElementsByClassName('toggle-botton')[0];
    // const navbarLinks  = document.getElementsByClassName('navbar-links')[0];
    // toggleButton.addEventListener('click',()=>{
    //   navbarLinks.classList.toggle('active');
    //   console.log("Jeman")
    // })

    return (
        <div className='topnav'>
            <div className="home brand-title">
                <Link to='/'>To Do List</Link>
            </div>
            <a href='#' className="toggle-button" onClick={()=>{document.querySelector('.navbar-links').classList.toggle('active')}}>
                <span className="bar"></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className="second_nav navbar-links">
            {!user && (<ul className="first">
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>Signup</Link></li>
                       </ul>
                            )
                }
                {user && (<ul className="second">
                            <li><span className="usr_email">{user.email}</span></li>
                            <li><span onClick={handleLogout}>Logout</span></li>
                          </ul>)}
            </div>
            </div>
    )
}

export default Navbar;
