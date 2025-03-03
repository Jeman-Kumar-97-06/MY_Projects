const Login = () => {
    return (
    <div className="flex items-center justify-center min-h-screen bg-blue-300">
        <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-center text-orange-500">Login</h2>
            <form class="mt-4">
                <div>
                    <label class="block text-gray-700">Username</label>
                    <input type="text" class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Enter your Username"/>
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700">Password</label>
                    <input type="password" class="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Enter your password"/>
                </div>
                <button class="w-full px-4 py-2 mt-6 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600">Login</button>
            </form>
            <p class="mt-4 text-center">Don't have an account? <a href="signup.html" class="text-orange-500">Sign up</a></p>
        </div>
    </div>
    )
};

export default Login;