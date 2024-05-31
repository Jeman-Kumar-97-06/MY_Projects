import {useState} from 'react';
import { useSignup } from '../hooks/useSignup';
const Signup = () => {
    const [email,setEmail]        = useState('');
    const [password,setPassword]  = useState('') ;
    const {signup,isLoading,error}= useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email,password);
    }
    return (
        <form className='signup_page' onSubmit={handleSubmit}>
            <h3>Signup:</h3>

            <div className='signup_email'>
                <label className='signup_email'>Email:</label>
                <input type='email' onChange={e=>setEmail(e.target.value)} value={email}/>
            </div>
            
            <div className='signup_pwd'>
                <label>Password:</label>
                <input type='password' onChange={e=>setPassword(e.target.value)} value={password}/>
            </div>

            <button type='submit' disabled={isLoading}>Sign Up</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}
export default Signup;