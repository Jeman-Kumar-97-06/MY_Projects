import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='routes_div'>
          <Routes>
            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
            <Route exact path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
            <Route exact path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
