import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {error,isloading,login} = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email,password);
    }

    return (
        <div className="login_div" onSubmit={handleLogin}>
            <form>
            <h3>Login:</h3>
            <label>Email</label>
            <input type='email' onChange={e=>{setEmail(e.target.value)}} value={email}/>
            <label>Password</label>
            <input type='password' onChange={e=>{setPassword(e.target.value)}} value={password}/>
            <button type='submit' disabled={isloading}>Login</button>
            {error && <div className='error'>{error}</div>}
            </form>         
        </div>
    )
}

export default Login;