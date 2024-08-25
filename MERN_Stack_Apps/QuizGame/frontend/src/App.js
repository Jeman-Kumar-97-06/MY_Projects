import { useState, useEffect } from "react";


function App() {

  const [qs,setQs] = useState(null);

  const [sc,setSc] = useState(0);

  const userOps = {};

  const handleSubmit = async (e) => {
    e.preventDefault()
    const score = 0;
    for (let i = 0; i < Object.keys(userOps).length; i++) {
      const element = userOps[Object.keys(userOps)[i]];
      if (element.ans===element.correct_ans){
        score+=1
      }
    }
    setSc(score);
    document.querySelector('.form_of_questions').style.display = 'none';
    document.querySelector('.score_div').style.display='inline-block';
  }

  const setClicked = async (name,value) => {
    const vals = value.split(' ') 
    userOps[name] = {'ans':vals[0],'correct_ans':vals[1]}
  }

  useEffect(()=>{
    document.querySelector('.score_div').style.display = 'none';
    const fetchQuestions = async () => {
      const resp = await fetch('http://localhost:4000/backend/questions/');
      const json = await resp.json();
      if (resp.ok)
      {
        setQs(json.queslist);
        document.querySelector('.loading').style.display = 'none';
      }
    }
    fetchQuestions();
  },[])

  return (
    <div className="App">
      { qs && <form className="form_of_questions" onSubmit={handleSubmit}>
        {qs.map((q)=>(
          <div>
            <h3>{q.question}</h3>
              {q.all_answers.map(x=>(
                <div>
                  <input type="radio" id={x} name={`selected_opfor_${qs.indexOf(q)+1}`} onClick={e=>setClicked(e.target.name,e.target.value)} value={x+' '+q.correct_answer}/>
                  <label htmlFor={x}>{x}</label><br></br>
                </div>
               ))}
          </div>
                            ))}
         <button type='submit'>submit</button>
      </form>}
      <h3 className="loading">Loading...</h3>
      <div className="score_div">
        <h2>{sc}</h2>
      </div>
    </div>
  );
}

export default App;
