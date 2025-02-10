import GenderCheckbox from "../components/GenderCheckbox";

const Signup = () => {
    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        {/* <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://www.flaticon.com/free-icons/chat-app" alt="Your Company"/>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div> */}
        <h2 className='mt-10 text-center text-2xl/9 font-bold tacking-tight text-gray-900'>Sign Up</h2>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                {/* Full Name :  */}
                <div>
                    <label for="fullName" class="block text-sm/6 font-medium text-gray-900">Full Name</label>
                    <div class="mt-2">
                        <input type="text" name="fullName" id="fullName" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                 </div>
                {/* User Name */}
                <div>
                    <label for="usrName" class="block text-sm/6 font-medium text-gray-900">User Name</label>
                    <div class="mt-2">
                        <input type="text" name="usrName" id="usrName" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                 </div>
                {/* Password :  */}
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                        <div class="text-sm">
                             <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"></a>
                        </div>
                    </div>
    
                    <div class="mt-2">
                        <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>
                {/* Confirm Password : */}
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium text-gray-900">Confirm Password</label>
                        <div class="text-sm">
                             <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"></a>
                        </div>
                    </div>
    
                    <div class="mt-2">
                        <input type="password" name="conf_password" id="conf_password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                    </div>
                </div>


                <GenderCheckbox/>


                {/* Submit Button : */}
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Already a member?
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">   Login</a>
            </p>
        </div>
    </div>
    )
}

export default Signup;