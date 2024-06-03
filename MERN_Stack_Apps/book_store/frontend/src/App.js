import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Cart from './pages/Cart';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route exact path='/' element={user?<Home/>:<Navigate to='/login'/>}/>
            <Route exact path='/login' element={!user?<Login/>:<Navigate to='/'/>}/>
            <Route exact path='/signup' element={!user?<Signup/>:<Navigate to='/'/>}/>
            <Route exact path='/cart_items' element={user?<Cart/>:<Navigate to='/'/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
