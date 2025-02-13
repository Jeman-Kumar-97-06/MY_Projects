import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
const Signup = () => {
    const {signup,loading,error} = useSignup();
    const [inputs,setInputs] = useState({fullName:'',username:"",password:"",confirmPassword:"",gender:""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }
    return (
        <section className="signup_form">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                                <input type="text" name="fullName" id="fullName" value={inputs.fullName} onChange={e=>setInputs({...inputs,fullName:e.target.value})} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                            </div>
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username" value={inputs.username} onChange={e=>setInputs({...inputs,username:e.target.value})} class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" value={inputs.password} onChange={e=>setInputs({...inputs,password:e.target.value})} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div>
                                <label for="cnf_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="password" name="cnf_password" id="cnf_password" value={inputs.confirmPassword} onChange={e=>setInputs({...inputs,confirmPassword:e.target.value})} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div>
                                <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                <select id="gender" name="gender" value={inputs.gender} onChange={e=>setInputs({...inputs,gender:e.target.value})} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
                            </p>
                        </form>
                        {error ? <div>{error}</div> : "success"}
                        {loading ? <div>Please wait the server is slow 🥹</div> : <div></div>}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Signup;