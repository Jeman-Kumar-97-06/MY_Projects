import { useState, useEffect } from "react";


function App() {

  const [qs,setQs] = useState(null);

  const [sc,setSc] = useState(0);

  const userOps = {};

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userOps)
  }

  const setClicked = async (name,value) => {
    const vals = value.split(' ') 
    userOps[name] = {'ans':vals[0],'correct_ans':vals[1]}
  }

  useEffect(()=>{
    const fetchQuestions = async () => {
      const resp = await fetch('http://localhost:4000/backend/questions/');
      const json = await resp.json();
      if (resp.ok)
      {
        setQs(json.queslist);
      }
    }
    fetchQuestions();
  },[])

  return (
    <div className="App">
      <form className="form_of_questions" onSubmit={handleSubmit}>
        {qs && qs.map((q)=>(
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
      </form>
    </div>
  );
}

export default App;
