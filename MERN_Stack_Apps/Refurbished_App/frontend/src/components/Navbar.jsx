import { ShoppingCart } from "lucide-react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
const api = "80b4c7d759bf4a53b9a9846666a5048c";
const Navbar = () => {   
    const {user}   = useAuthContext();
    const {logout} = useLogout();

    const [pin_c,setPin_c] = useState('Pincode')

    const handleLogout = () => {
      logout();
    }

    const handleGeoLocation = () => {
      setPin_c('wait...');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const {latitude,longitude} = position.coords;
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=${api}`);
            const data = await response.json();
            const comp = data.results[0]?.components;
            const pinc = comp?.postcode;
            if (pinc) {
              console.log("Pincode : ",pinc);
              setPin_c(pinc)
            }
            else {
              console.log("Pincode not found!")
            }
          },
          (error) => {
            console.error("Error getting location:",error.message);
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.');
      }   
    }

    return (
    <nav className="bg-blue-500 text-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-white font-bold text-xl pRPhones">RefurbStore</h1>
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">{user._doc.name}</span>
          <Link to='/cart'><ShoppingCart className="mr-2" size={18} /></Link>
          <button onClick={handleGeoLocation} className='text-white font-medium'>📍{pin_c}</button>
          <button onClick={handleLogout} className="font-bold px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700">
            Logout
          </button>
        </div>
    </nav>
    )
};

export default Navbar;