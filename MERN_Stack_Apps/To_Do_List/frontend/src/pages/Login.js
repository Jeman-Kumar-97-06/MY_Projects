import {useState} from 'react';
import {useLogin} from '../hooks/useLogin';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login,isloading,error} = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email,password);
    }

    return (
        <form className='login_page' onSubmit={handleLogin}>
            <h3>Login:</h3>

            <label>Email:</label>
            <input type='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>

            <label>Password:</label>
            <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}}/>

            <button type='submit' disabled={isloading}>Login</button>
            {!isloading || <div>Please wait. The server response is slow.😿</div>}
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login;