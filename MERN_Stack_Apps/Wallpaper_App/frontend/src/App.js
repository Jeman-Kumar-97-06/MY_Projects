import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={user ? <Home/> : <Navigate to = '/login'/>}/>
          <Route exact path='/cart' element = {user ? <CartDets/> : <Navigate to = '/login'/>}/>
          <Route exact path='/login' element={!user ? <Login/> : <Navigate to = '/'/>}/>
          <Route exact path='/signup' element={!user ? <Signup/> : <Navigate to = '/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
