import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Create = () => {
    const [name,setName]   = useState('');
    const [age,setAge]     = useState('');
    const [gend,setGend] = useState('jeman');
    const [isPending,setIsPending] = useState(false);
    const navg = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const det = {name,age,gen:gend};
        setIsPending(true);
        fetch('http://localhost:1234/details',{
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body:JSON.stringify(det)
        }).then(()=>{
            console.log('Details Added !')
            setIsPending(false);
            navg('/');
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className='create-form'>
            <h2>Add New Details:</h2>
            <form onSubmit={e=>handleSubmit(e)}>
                <label>Name :</label>
                <input type='text' required value={name} onChange={e=>setName(e.target.value)}/>
                <label>Age :</label>
                <input type='text' required value={age} onChange={e=>setAge(e.target.value)}/>
                <label>Gender :</label>
                <select value={gend} onChange={e=>setGend(e.target.value)}>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                    <option value='other'>other</option>
                </select>
                {!isPending && <button>Add Details</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create;