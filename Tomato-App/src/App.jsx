import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
