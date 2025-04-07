import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  const {user} = useAuthContext();
  return (
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={user ? <Home/> : <LandingPage/>}/>
        <Route exact path='/login' element={!user ? <Login/> : <Home/>}/>
        <Route exact path='/signup' element={!user ? <Signup/> : <Home/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
