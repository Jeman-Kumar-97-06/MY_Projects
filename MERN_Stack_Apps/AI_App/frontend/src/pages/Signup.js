import {useState} from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {signup,error,isloading} = useSignup();
     
    const handleSignup = async (e) => {
        e.preventDefault();
        await signup(name,email,password);
    }

    return (
        <div className='signup_page' onSubmit={handleSignup}>
            <h3>Signup Page</h3>
            <form className='signup_form'>
                <label>Name:</label>
                <input type='text' value={name} onChange={e=>{setName(e.target.value)}}/>
                <label>Email:</label>
                <input type='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <label>Password:</label>
                <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}}/>
                <button type="submit" disabled={isloading}>Signup</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
};

export default Signup;