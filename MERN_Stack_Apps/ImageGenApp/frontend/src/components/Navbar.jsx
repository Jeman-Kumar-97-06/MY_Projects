const Navbar = ({username,profPic}) => {
    return (
        <nav className="bg-teal-500 text-white p-4 text-center text-xl font-bold flex justify-between items-center">
            <h1 className="text-lg font-bold">AI Image Generator</h1>
            <div className="flex items-center gap-4">
                <span>{username}</span>
                <img src={profPic} alt="pic" className="w-7 h-7 rounded-full" />
                <button  className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </div>
        </nav>
    )  
};

export default Navbar;