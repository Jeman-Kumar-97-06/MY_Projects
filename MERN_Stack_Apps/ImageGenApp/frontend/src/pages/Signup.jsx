import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

const Signup = () => {
    const [username,setUsername]   = useState('');
    const [fullname,setFullname]   = useState('');
    const [password,setPassword]   = useState('');
    const [cpassword,setCpassword] = useState('');
    const [selFile, setSelFile]    = useState(null);
    const [err,setErr]             = useState(null);
    const {error,isloading,signup} = useSignup();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!username || !fullname || !password || !cpassword) {
            setErr('All fields must be filled!');
        }
        if (password !== cpassword) {
            setErr("Passwords don't match!")
        }
        console.log(fullname,username,password,selFile);
        await signup(fullname,username,password,selFile);
    }

    const handleFileChange = (event) => {
        setSelFile(event.target.files[0]);
      };

    return (
        <div className="signup_page w-[100vw] h-[100vh] content-center">
            <motion.form initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="m-auto bg-[#66D2CE] flex flex-col w-[400px] p-5 pt-10 rounded-lg" onSubmit={handleSignup}>
                <input 
                    value={fullname}
                    onChange={e=>setFullname(e.target.value)}
                    type='text' 
                    className="p-3 bg-white rounded-lg mb-5" 
                    placeholder="Fullname" />
                <input 
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                    type='text' 
                    className="p-3 bg-white rounded-lg mb-5" 
                    placeholder="Username" />
                <input 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    type='password' 
                    className="p-3 bg-white rounded-lg mb-5" 
                    placeholder='Password'/>
                <input 
                    value={cpassword}
                    onChange={e=>setCpassword(e.target.value)}
                    type='password' 
                    className="p-3 bg-white rounded-lg mb-5" 
                    placeholder="Confirm Password"/>

                <div className="relative w-full mt-4 mb-4">
                    <label className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer">
                       <span className="text-gray-600 text-sm">
                            {selFile ? selFile.name : "Upload Image"}
                       </span>
                       <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                         Browse
                       </span>
                       <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        />
                    </label>      
                </div>
                <button type='submit' className="cursor-pointer shadow-sm bg-[#E3D2C3] w-[100px] p-2 rounded-lg">Signup</button>
                <p>Already have an account ? <Link to='/login' className="text-blue-800">Login</Link></p>
            </motion.form>
        </div>
    )
};

export default Signup;