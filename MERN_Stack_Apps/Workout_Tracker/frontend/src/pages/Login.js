import {useState} from 'react';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email,password);
    }

    return (
        <form className='login' onSubmit={handleLogin}>
            <h3>Login</h3>
            <label>Email</label>
            <input type='email' onChange={e=>{setEmail(e.target.value)}} value={email}/>
            <label>Password</label>
            <input type='password' onChange={e=>{setPassword(e.target.value)}} value={password}/>
            <button type='submit'>Login</button>
        </form>
    )
};

export default Login;