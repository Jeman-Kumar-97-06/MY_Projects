import {useState} from 'react';
import {useSignup} from '../hooks/useSignup';

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const {signup,isloading,error} = useSignup();

    const handleSignup = async (e) => {
        e.preventDefault();
        await signup(email,password);
    }

    return (
        <form onSubmit={handleSignup} className='signup_page'>
            <h3>Signup:</h3>
            
            <label>Email:</label>
            <input type='email' onChange={e=>{setEmail(e.target.value)}} value={email}/>

            <label>Password:</label>
            <input type="password" onChange={e=>{setPassword(e.target.value)}} value={password}/>

            <button type='submit' disabled={isloading}>Signup</button>
            {!isloading || <div>Please wait. The server response is slow.😿</div>}
            {error && <div className='error'>{error}</div>}
        </form>
    )
};

export default Signup;