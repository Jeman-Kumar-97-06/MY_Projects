import { useLogout } from "../hooks/useLogout";

const Navbar = ({username,profPic}) => {
    const {logout} = useLogout();
    const handleLogout = () => {
        logout();
    }
    return (
        <nav className="bg-teal-500 text-white p-4 text-center text-xl font-bold flex justify-between items-center">
            <h1 className="text-lg font-bold">ImgGen</h1>
            <div className="flex items-center gap-4">
                <span>{username}</span>
                <img src={profPic} alt="pic" className="w-7 h-7 rounded-full" />
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded cursor-pointer">Logout</button>
            </div>
        </nav>
    )  
};

export default Navbar;