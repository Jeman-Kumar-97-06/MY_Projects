import {BrowserRouter,Routes,Route} from 'react-route-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
