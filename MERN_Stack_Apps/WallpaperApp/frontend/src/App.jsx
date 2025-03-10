
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Signup from './pages/Signup.jsx'
import {Route,Routes, BrowserRouter, Navigate} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Upload from './components/Upload.jsx';
import LandingPage from './pages/Landing.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';
function App() {
  const {user} = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/lp' element={<LandingPage/>}/>
          <Route exact path='/' element={user ? <><Navbar/><Home/></> : <Navigate to ='/lp'/>}/>
          <Route exact path='/signup' element={!user ? <Signup/> : <Navigate to = '/'/>}/>
          <Route exact path='/login' element={!user ? <Login/> : <Navigate to = '/'/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
