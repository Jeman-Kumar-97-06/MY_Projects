import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from "./pages/Signup";
import Login from './pages/Login';

function App() {
  return (
    <div className="app_div">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<><Navbar/><Home/></>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
