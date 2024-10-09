import { useState } from "react";
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        <div className='login_page'>
            <h3>Login Page</h3>
            <form className='login_form'>
                <label>Email:</label>
                <input type='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <label>Password:</label>
                <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};

export default Login;