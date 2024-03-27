
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bill from './components/Bill';
import useFetch from './customHooks/useFetch';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  const {data,isPending,error} = useFetch('http://localhost:1234/menu_items/')
  return (
    <div className="App">
      <Navbar/>
      <Home food={data}/>
    </div>
  );
}

export default App;
