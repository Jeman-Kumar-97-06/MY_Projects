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
        <Route exact path='/lp' element={user ? <Home/> : <LandingPage/>}/>
        <Route exact path='/' element={user ? <Home/> : <Navigate to='/lp'/>}/>
        <Route exact path='/login' element={!user ? <Login/> : <Home/>}/>
        <Route exact paht='/signup' element={!user ? <Signup/> : <Home/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
