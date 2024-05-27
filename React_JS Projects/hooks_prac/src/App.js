import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Home from "./components/Home";
import DetailsList from './components/DetailsList';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Routes>
          <Route path='/create' element={<Create/>}/>
          <Route path='/dets' element={<DetailsList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
