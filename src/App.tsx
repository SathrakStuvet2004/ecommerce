import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import { useGetUser } from './hooks/hook'


function App() {
  const { data: user = [] } = useGetUser();
  //const currentUser = user.find((data: any) => data.email === JSON.parse(localStorage.getItem("currentUser") || '{}').email );
  
  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='/Login' element={<LogInPage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Cart' element={<CartPage />} />
      <Route path='/Orders' element={<OrderPage />} />
    </Routes>
  )
}

export default App
