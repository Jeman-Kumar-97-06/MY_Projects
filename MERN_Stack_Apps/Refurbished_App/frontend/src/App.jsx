import CartPage from "./pages/Cart"
import ContactUs from "./pages/Contact"
import HomePage from "./pages/Homepage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/Login"
import AllProducts from "./pages/Products"
import ProductDetail from "./components/ProductDetails";
import SignupPage from "./pages/Signup"
import {useAuthContext} from './hooks/useAuthContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const {user} = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/signup' element={<SignupPage/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/contact' element={<ContactUs/>}/>
          <Route exact path='/phone/:id' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
