import {useState,useEffect} from 'react';

import {decode} from 'html-entities';

const Home = () => {

    const [qs,setQs]           = useState(null);
    const [loading,setLoading] = useState('Loading...');

    const [score,setScore]     = useState(null);

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
        setScore(score);
        document.querySelector(".questions").style.display = 'none';
    }

    useEffect(()=>{
        const fetchQuestions = async () => {
            const resp = await fetch('http://localhost:4000/api/questions/');
            const json = await resp.json();
            setQs(json);
            setLoading('');
        }
        fetchQuestions();
    },[])

    return (
        <div className='home_page'>
            <form className='questions' onSubmit={handleAnswersSubmit}>
                {/* Rendering each question */}
                {qs   &&    <div> 
                              {qs.map(q => (
                                            <div className='each_q' key={q._id}>
                                               <h4 className='quest'>{decode(q.question)}</h4>
                                               {/* Rendering each option */}
                                               {q.all_options.map(option=>(
                                               <div className='each_option'>
                                                    <input type="radio" id={option} name={`question${qs.indexOf(q)}`} value={option} onClick={e=>handleOptionSelect(e,q.correct_option)}/>
                                                    <label htmlFor={option}>{decode(option)}</label>
                                               </div>
                                                    ))}
                                            </div>
                                            ))
                             }
                             <button type='submit' className='ans_sub_btn'>Submit</button>
                            </div>
                            }
                {loading && <div>{loading}</div>}
            </form>
            {score && <div className='score_div'>
                    <h2>Your Score is : {score}</h2>
            </div>}
        </div>
    )
}

export default Home;