import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetUser } from "./hooks/hook";
import { checkUser } from "./UserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserAuth from "./auth/UserAuth";

export default function App() {
  const location = useLocation();

  const dispatch = useDispatch();

  const { data: user = [] } = useGetUser();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  useEffect(() => {
    if (!currentUser) {
      dispatch(checkUser(false));
      return;
    }

    const isLoggedIn = user.find(
      (data: any) =>
        data.email === currentUser.email &&
        data.password === currentUser.password
    );

    dispatch(checkUser(!!isLoggedIn));
  }, [user, currentUser, dispatch]);

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
          boxShadow: "0px 0px 10px rgba(37, 99, 235, 0.25)",
        }}
      />

      {location.pathname !== "/login" && <NavBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/login" element={<LogInPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/orders" element={<OrderPage />} />

        <Route path="/user" element={<UserPage />} />

        <Route
          path="/admin"
          element={
            <UserAuth>
              <AdminPage />
            </UserAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}