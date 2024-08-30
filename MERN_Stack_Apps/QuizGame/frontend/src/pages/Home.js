import {useState,useEffect} from 'react';

const Home = () => {

    const [qs,setQs] = useState(null);

    useEffect(()=>{
        const fetchQuestions = async () => {
            const resp = await fetch('http://localhost:4000/api/questions/');
            const json = await resp.json();
            setQs(json);
        }
        fetchQuestions();
    },[])

    return (
        <div className='home_page'>
            {qs && qs.map(q=>(
                <div className='each_q' key={q._id}>
                    <h1>{qs.indexOf(q)+1}    {q.question}</h1>
                </div>
            ))}
        </div>
    )
}

export default Home;