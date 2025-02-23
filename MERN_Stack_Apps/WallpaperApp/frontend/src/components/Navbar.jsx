import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from '../hooks/useLogout';
import { useWallContext } from "../hooks/useWallContext";
const Navbar = () => {
    const {logout} = useLogout();
    const {user} = useAuthContext();
    const {dispatch} = useWallContext();
    const handleLogout = () => {
        logout();
    }
    return (
        <nav class="flex items-center justify-between px-6 py-3 bg-blue-900 text-white">
        
        <div class="text-xl font-bold">Wallpicks</div>
      
        
        <div class="flex-1 mx-4 max-w-lg">
        <input 
            type="text" 
            placeholder="Search..." 
            class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />    
            {/* <form class="max-w-md mx-auto">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form> */}
        </div>
      
        <div class="flex items-center space-x-4">
          {
            !user && (<>
                <Link to='/login'><button class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg">Login</button></Link>
                <Link to='/signup'><button class="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg">Signup</button></Link>
            </>)
          }

          {
            user && (<>
                <span>username</span>
                <button onClick={handleLogout} class="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg">Logout</button>
            </>)
          }
          
        </div>
      </nav>
    );
};

export default Navbar;