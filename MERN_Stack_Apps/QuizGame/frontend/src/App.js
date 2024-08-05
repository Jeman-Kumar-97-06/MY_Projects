import { useState, useEffect } from "react";

function App() {

  const [qs,setQs] = useState(null);

  useEffect(()=>{
    const fetchQuestions = async () => {
      const resp = await fetch('http://localhost:4000/backend/questions/');
      const json = await resp.json();
      if (resp.ok)
      {
        setQs(json);
      }
    }
    fetchQuestions();
  },[])

  return (
    <div className="App">
      {qs && qs.map((q)=>(
        <div>
          <form>
            <h3>{q.question}</h3>
              {q.incorrect_answers.map(x=>(
                <div>
                  <input type="radio" id="age1" name="age" value="30"/>
                  <label for="age1">{x}</label><br></br>
                </div>
              ))}
              <button type="submit">submit</button>
          </form>
          
        </div>
      ))}
    </div>
  );
}

export default App;
