
import './App.css';

import {useState,useEffect} from 'react';

function App() {
  console.log("HIIII")
  const [name,setName] = useState('');
  const [rendertimes,setRendertimes] = useState(0);

  useEffect(()=>{
    console.log('ran this')
    setRendertimes(prevRendertimes => {console.log(prevRendertimes)})
  },[])

  return (
    <div className="App">
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <div>You've typed {name}</div>
      <div>I rendered {rendertimes} times</div>
    </div>
  );
}

export default App;
