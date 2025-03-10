import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import NotesLandingPage from './pages/LandingPage';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className='pages'>
          <Routes>
            <Route exact path='/lp' element={<NotesLandingPage/>}/>
            <Route exact path='/' element={user ? <><Navbar/><Home/></> : <Navigate to='/login'/>}/>
            <Route exact path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
            <Route exact path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
