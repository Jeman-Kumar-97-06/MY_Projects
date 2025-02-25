const Navbar = () => {
    return (
        <div className="bg-red-200 h-auto p-3 flex justify-between">
            <div className="ml-2">
                <a href='#'>Compilers</a>
            </div>
            <div className="mr-5 flex justify-between w-40">
                <span>Username</span>
                <a href="#">Logout</a>
            </div>
        </div>
    )
};

export default Navbar;