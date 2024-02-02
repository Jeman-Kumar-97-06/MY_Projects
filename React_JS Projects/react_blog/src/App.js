import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import About from './About';
import BlogDetails from './BlogDetails';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  
  
  return (
    
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs/:id' element={<BlogDetails/>}/>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
