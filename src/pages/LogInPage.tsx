import { useGetUser } from '../hooks/hook'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import './SignUpPage.css'

export default function LogInPage() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const { data: user = [] } = useGetUser();

  function logIn(e:any) {
    e.preventDefault();
    const currentUser = user.find((data: any) => data.email === email );

    if (!currentUser) {
      alert("Invalid email");
      return;
    }
    if (currentUser.password !== password) {
      alert("Invalid password");
      return;
    }

    console.log(currentUser)

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    setEmail("");
    setPassword("");
    navigate("/Home");
  }

  return (
    <div className="LogInPage">
      <title>Login</title>
      <div>
        <h1 className='LogInText'>Login Page</h1>
      </div>
      <form className="LogInForm" onSubmit={logIn}>
        <div>
          <input 
            placeholder='Enter your Name'
            className='userName'
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
    </div>
  )
}