import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;