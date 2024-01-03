import logo from './logo.svg';
import './App.css';

function App() {
  const likes = 50;
  const person = {name:'yoshi',age:30};
  return (
    <div className="App">
      <img src={logo} alt="" />
      <div className="content">
        <h1>App Component</h1>
        <h3>{likes}</h3>
        <p>{person.age}</p>
      </div>
    </div>
  );
}

export default App;
