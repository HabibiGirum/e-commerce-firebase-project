import { Container } from 'react-bootstrap'
import {Route, BrowserRouter , Routes} from 'react-router-dom'

import {
  Cart,
  Error,
  Home,
  Login,
  Product,
  Register
} from './pages';

import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <>
      {/* // this is router */}
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/products' exact element={<Product />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='*' exact element={<Error />} /> 
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
