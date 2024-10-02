import { useState } from "react"
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [profilepic,setProfilepic] = useState('');
    const [about,setAbout] = useState('');
    const [password,setPassword] = useState('');
    const {signup,error,isloading} = useSignup();

    const handleSignup = async (e) => {
        e.preventDefault();
        await signup(username,profilepic,about,email,password);
    }

    return (
        <div className='signup_div'>
            <form onSubmit={handleSignup}>
            <h3>Signup:</h3>
            <label>Username</label>
            <input type='text' onChange={e=>{setUsername(e.target.value)}} value={username}/>
            <label>Email</label>
            <input type='email' onChange={e=>{setEmail(e.target.value)}} value={email}/>
            <label>Password</label>
            <input type='password' onChange={e=>{setPassword(e.target.value)}} value={password}/>
            <label>Image</label>
            <input type='text' onChange={e=>{setProfilepic(e.target.value)}} value={profilepic}/>
            <label>About</label>
            <textarea type='text' rows="5" onChange={e=>{setAbout(e.target.value)}} value={about}/>
            <button type='submit' disabled={isloading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
        </div>
    )
};

export default Signup;