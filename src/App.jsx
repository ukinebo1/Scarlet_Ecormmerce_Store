import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Products from './Pages/Product/Products'
import ProductDescription from './Pages/ProductDescription/ProductDescription'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    // <Navbar />
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/prodDescription" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App