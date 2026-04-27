import './LogInPage.css'

export default function LogInPage() {
  return (
    <div className='LogInPage'>
      <div>
        <h1 className="LogInText">Log In Page</h1>
      </div>

      <div className="LogInForm">
        <div><input type="email" placeholder="Email Input" className="EmailInput" /></div>
        <div>
          <input type="password" placeholder="Password" className="PasswordInput" />
        </div>
        <div>
          <button className='LogInButton'>Log In</button>
        </div>
      </div>
    </div>
  )
}