const Navbar = () => {
    return (
        <div className="navbar_c">
            <div className="home_link">
                <a href='/'>takeAnote</a>
            </div>
            <div className="remaining_links">
                <a href='/login'>login.</a>
                <a href='/about'>about.</a>
                <a href='/contact'>contact.</a>
            </div>
        </div>
    )
};

export default Navbar;