import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import { useGetUser } from './hooks/hook'
import { checkUser } from './UserSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function App() {
  const { data: user = [] } = useGetUser();


  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}');

  useEffect(() => {
    
    const isLoggedIn = user.find((data: any) => data.email === currentUser.email && data.password === currentUser.password);
    dispatch(checkUser(!!isLoggedIn));
  }, [currentUser, dispatch]);

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
