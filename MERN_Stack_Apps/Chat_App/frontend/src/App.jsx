import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom';
import Signup from "./pages/Signup";
import Login from './pages/Login';
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <div className="app_div">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={user ? <Navigate to='/'/> : <Signup/>}/>
          <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
          <Route path='/' element={user ? <><Navbar/><Home/></> : <Navigate to='/login'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
