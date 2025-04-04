import { ShoppingCart } from "lucide-react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {   
    const {user}   = useAuthContext();
    const {logout} = useLogout();

    const handleLogout = () => {
      logout();
    }

    return (
    <nav className="bg-blue-500 text-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl pRPhones">RefurbStore</h1>
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">{user._doc.name}</span>
          <button><ShoppingCart className="mr-2" size={18} /></button>
          <button onClick={e=>{alert('Clicked Location')}} className='text-gray-700 font-medium'>📍</button>
          <button onClick={handleLogout} className="font-bold px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700">
            Logout
          </button>
        </div>
    </nav>
    )
};

export default Navbar;