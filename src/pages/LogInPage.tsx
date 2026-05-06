import { useGetUser } from '../hooks/hook'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import './SignUpPage.css'
import { useDispatch } from 'react-redux';
import { checkUser } from '../UserSlice';

export default function LogInPage() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data: user = [] } = useGetUser();
  const dispatch = useDispatch()

  function logIn(e: any) {
    e.preventDefault();
    const currentUser = user.find((data: any) => data.email === email);

    if (!currentUser) {
      alert("please Enter valid email");
      return;
    }
    if (currentUser.password !== password) {
      alert("Invalid password");
      return;
    }
    if (currentUser.name !== name) {
      alert("Invalid user name")
      return;
    }
    dispatch(checkUser(true))

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    setEmail("");
    setPassword("");
    setName("")
    navigate("/");

  }

  return (
    <div className="LogInPage">
      <title>Login</title>

      <div>
        <h1 className='LogInText'>Login Page</h1>
      </div>

      <form className="LogInForm" onSubmit={logIn}>
        <div>
          <input type='name'
            placeholder='Enter your Name'
            className='userNameInput'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input type="email"
            placeholder="Enter your Email"
            className="EmailInput"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password"
            placeholder="Enter your Password"
            className="PasswordInput"
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button className='LoginButton' type="submit">
            Login
          </button>
        </div>
      </form>
      <div>
        <p className="LoginText">If you don't have a account ? <Link to="/signup" className="LoginLink" >sign up</Link></p>
      </div>
    </div>
  )
}