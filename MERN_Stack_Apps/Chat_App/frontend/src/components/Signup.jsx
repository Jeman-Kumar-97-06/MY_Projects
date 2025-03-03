const Signup = () => {
    return (
       <div className="flex items-center justify-center min-h-screen bg-blue-300">
            <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold text-center text-orange-500">Signup</h2>
                <form class="mt-4">
                    <div className='mt-4'>
                        <label className="block text-gray-700">Fullname</label>
                        <input type="text" className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Enter your fullname"/>
                    </div>
                    <div className='mt-4'>
                        <label className="block text-gray-700">Username</label>
                        <input type="text" className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Enter a username"/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-orange-500" placeholder="Enter your password"/>
                    </div>
                    <div className='mt-5'>
                        <select>
                            <option value='null'>Select Gender:</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <button class="w-full px-4 py-2 mt-6 font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600">Signup</button>
                </form>
                <p class="mt-4 text-center">Already have an account? <a href="signup.html" class="text-orange-500">Login</a></p>
            </div>  
        </div>
    )
};

export default Signup;