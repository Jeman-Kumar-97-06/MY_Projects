import {useState,useEffect} from 'react';

const Home = () => {

    const [qs,setQs] = useState(null);

    const selectedOptions = {};

    const handleOptionSelect = (e,corr) => {
        selectedOptions[e.target.name] = [e.target.value,corr];
    }

    const handleAnswersSubmit = (e) => {
        e.preventDefault();
        let score = 0;
        Object.keys(selectedOptions).forEach(k=>{
            if (selectedOptions[k][0]===selectedOptions[k][1]){
                score+=1
            }
        })
        console.log(score);
    }

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
            <form className='questions' onSubmit={handleAnswersSubmit}>
                {/* Rendering each question */}
                {qs && qs.map(q=>(
                        <div className='each_q' key={q._id}>
                            <h4>{q.question}</h4>
                            {/* Rendering each option */}
                            {q.all_options.map(option=>(
                                <div className='each_option'>
                                    <input type="radio" id={option} name={`question${qs.indexOf(q)}`} value={option} onClick={e=>handleOptionSelect(e,q.correct_option)}/>
                                    <label htmlFor={option}>{option}</label>
                                </div>
                                                    ))}
                        </div>
                                ))
                        
                       }
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Home;