const Navbar = () => {
    return (
        <>
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">Upload</a></li>
                <li><a href="#contact">Login</a></li>
                <li style={{float:"right"}}><a href="#about">About</a></li>
            </ul>
        </>
    )
};

export default Navbar;