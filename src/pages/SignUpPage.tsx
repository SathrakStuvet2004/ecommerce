import './SignUpPage.css'

export default function SignUpPage() {
  return (
    <div className='SignUpPage'>
      <div>
        <h1 className="SignUpText">Sign Up Page</h1>
      </div>

      <div className="SignUpForm">
        <div><input type="email" placeholder="Enter your Email" className="EmailInput" /></div>
        <div>
          <input type="password" placeholder="Enter your Password" className="PasswordInput" />
        </div>
        <div>
          <button className='SignUpButton'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}