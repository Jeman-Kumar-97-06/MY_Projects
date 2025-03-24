const Navbar = () => {   
    return (
    <nav className="bg-blue-500 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">RefurbStore</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">John Doe</span>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700">
            Logout
          </button>
        </div>
    </nav>
    )
};

export default Navbar;