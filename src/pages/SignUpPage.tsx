import { useState } from 'react'
import './SignUpPage.css'
import { useAddUser } from '../hooks/hook';
import { Link, useNavigate } from 'react-router';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { mutate: addUser } = useAddUser();
  const navigate = useNavigate();

  function handelSubmit(e: any) {
    e.preventDefault();

    if (!email || !password || !name) {
      alert("Please fill in all fields");
      return;
    }
    const newUser = {
      email,
      password,
      name
    }
    addUser(newUser);
    setEmail('');
    setPassword('');
    setName('');
    localStorage.setItem("currentUser", JSON.stringify(newUser));
     navigate("/Home");
  }

  return (
    <div className='SignUpPage'>
      <div>
        <h1 className="SignUpText">Sign Up Page</h1>
      </div>

      <form className="SignUpForm" onSubmit={handelSubmit}>
        <div>
          <input placeholder='Enter your name' 
          className='userNameInput'
          value={name}
          onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <input type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="EmailInput" />
        </div>
        <div>
          <input type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="PasswordInput" />
        </div>
        <div>
          <button className='SignUpButton' type="submit">
            Sign Up
          </button>
        </div>
      </form>

      <div>
        <p className="LoginText">Already have an account? <Link to="/Login" className="LoginLink">Login</Link></p>
      </div>
    </div>
  )
}