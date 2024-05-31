import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import {Link} from 'react-router-dom';

const Login = () => {
    const [email,setEmail]       = useState('');
    const [password,setPassword] = useState('');
    const {login,isLoading,error}= useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email,password);       
    }
    return (
        <form className="login_page" onSubmit={handleSubmit}>
            <h3>Login:</h3>
            <div className='login_email'>
                <label>Email:</label>
                <input type="email" onChange={e=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className="login_pwd">
                <label>Password:</label>
                <input type='password' onChange={e=>setPassword(e.target.value)} value={password}/>
            </div>

            <button type="submit" disabled={isLoading}>Login</button>
            <Link className='nav_link' to='/signup'>Signup</Link>
            {error && <div className="error">{error}</div>}
        </form>
    )
};

export default Login;