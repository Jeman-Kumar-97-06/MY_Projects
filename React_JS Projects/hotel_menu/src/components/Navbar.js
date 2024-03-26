import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <a href ='/'>Menu</a>
                <a href ='/non-veg'>Non-Veg</a>
                <a href ='/veg'>Veg</a>
                <a href='/vegan'>Vegan</a>
            </div>
        </div>
    )
};

export default Navbar;