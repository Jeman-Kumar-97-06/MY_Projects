import {useState} from 'react';
const Signup = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
     
    return (
        <div className='signup_page'>
            <h3>Signup Page</h3>
            <form className='signup_form'>
                <label>Name:</label>
                <input type='text' value={name} onChange={e=>{setName(e.target.value)}}/>
                <label>Email:</label>
                <input type='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <label>Password:</label>
                <input type='password' value={password} onChange={e=>{setPassword(e.target.value)}}/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
};

export default Signup;