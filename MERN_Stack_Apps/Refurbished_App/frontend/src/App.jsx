import CartPage from "./pages/Cart"
import ContactUs from "./pages/Contact"
import HomePage from "./pages/Homepage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/Login"
import AllProducts from "./pages/Products"
import ProductDetail from "./components/ProductDetails";
import SignupPage from "./pages/Signup"
import {useAuthContext} from './hooks/useAuthContext';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const {user} = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={user ? <HomePage/> : <LandingPage/>}/>
          <Route exact path='/signup' element={user ? <Navigate to='/'/> : <SignupPage/>}/>
          <Route exact path='/login' element={user ? <Navigate to='/'/> : <LoginPage/>}/>
          <Route exact path='/contact' element={user ? <ContactUs/> : <Navigate to='/login'/>}/>
          <Route exact path='/phone/:id' element={user ? <ProductDetail/> : <Navigate to='/login'/>}/>
          <Route exact path='/cart' element={user? <CartPage/> : <Navigate to='/login'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
