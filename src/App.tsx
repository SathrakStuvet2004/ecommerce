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
import UserPage from './pages/UserPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from './pages/AdminPage'


function App() {
  const { data: user = [] } = useGetUser();

  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}');

  useEffect(() => {
    const isLoggedIn = user.find((data: any) => data.email === currentUser.email && data.password === currentUser.password);
    dispatch(checkUser(!!isLoggedIn));
  }, [currentUser, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        theme="dark"
        toastStyle={{
          background: "#0F172A",
          color: "#fff",
          border: "1px solid #1D4ED8",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(37, 99, 235, 0.25)"
        }}
      />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/Login' element={<LogInPage />} />
        <Route path='/Cart' element={<CartPage />} />
        <Route path='/Orders' element={<OrderPage />} />
        <Route path='/User' element={<UserPage />} />
        <Route path='/admin' element={<AdminPage />}/>
      </Routes>
    </>
  )
}

export default App
