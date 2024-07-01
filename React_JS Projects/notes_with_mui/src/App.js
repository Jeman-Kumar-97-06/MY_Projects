import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/create' element={<Create/>}/>
          <Route exact path='/' element={<Notes/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
