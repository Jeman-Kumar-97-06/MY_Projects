import Home from "./components/Home"
import Sidebar from "./components/Sidebar";
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<><Sidebar/><Home/></>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
