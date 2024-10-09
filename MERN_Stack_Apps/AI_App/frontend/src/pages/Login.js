import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login,error,isloading}= useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email,password)
    }

    return (
        <div className='login_page' onSubmit={handleLogin}>
            <h3>Login Page</h3>
            <form className='login_form'>
                <label>Email:</label>
                <input type='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <label>Password:</label>
                <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}}/>
                <button type='submit' disabled={isloading}>Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
};

export default Login;