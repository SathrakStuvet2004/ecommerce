import { useState } from 'react'
import './SignUpPage.css'
import { useAddUser } from '../hooks/hook';
import { Link } from 'react-router';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {mutate: addUser} = useAddUser();

  function handelSubmit(e:any){
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    const newUser = {
      email,
      password
    }
    addUser(newUser);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='SignUpPage'>
      <div>
        <h1 className="SignUpText">Sign Up Page</h1>
      </div>

      <form className="SignUpForm" onSubmit={handelSubmit}>
        <div>
          <input type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="EmailInput" /></div>
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