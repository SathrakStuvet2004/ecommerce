import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import SignUpPage from './pages/SignUpPage'


function App() {

  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Cart' element={<CartPage />} />
      <Route path='/Orders' element={<OrderPage />} />
    </Routes>
  )
}

export default App
