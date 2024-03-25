import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import React from 'react';
import About from './About';
import BlogDetails from './BlogDetails';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
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
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
    </Router>
  );
}
export default App;
