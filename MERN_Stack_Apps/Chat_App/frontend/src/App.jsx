import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import About from './pages/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route exact path = '/login' element={<Login/>}/>
          <Route exact path = '/signup' element={<Signup/>}/>
          <Route exact path = '/about' elment={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;