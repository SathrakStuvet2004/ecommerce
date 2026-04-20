import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Cart' element={<CartPage />} />
    </Routes>
  )
}

export default App
