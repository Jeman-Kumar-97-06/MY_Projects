import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div class="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Login</h2>

            <form class="space-y-4">
                <div>
                    <label class="block text-gray-700 font-medium">Username</label>
                    <input 
                        type="text" 
                        placeholder="Enter your username" 
                        class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label class="block text-gray-700 font-medium">Password</label>
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <button 
                    type="submit" 
                    class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                    Login
                </button>

                <p class="text-sm text-center text-gray-600 mt-2">
                    Don't have an account? <Link to="/signup" class="text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </form>
        </div>
    )
};

export default Login;