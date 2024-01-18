import Navbar from './Navbar';
import Home from './Home';
import './App.css';

function App() {
  const title  = 'Welcome to React_Blog site';
  const likes  = 50;
  const person = {name:'Yoshi',age:30};
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className="content">
        <h1>{title}</h1>
        <p>person age : {person.age}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>
      </div>
    </div>
  );
}

export default App;
