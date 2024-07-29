import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProdInDetails from "./pages/ProdInDetails";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/:id' element={<ProdInDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
