import './SignUpPage.css'

export default function LogInPage() {
  return (
    <div className="LogInPage">
      <title>Login</title>
      <div>
        <h1 className='LogInText'>Login Page</h1>
      </div>
      <form className="LogInForm">
        <div>
          <input type="email" placeholder="Enter your Email" className="EmailInput" />
        </div>
        <div>
          <input type="password" placeholder="Enter your Password" className="PasswordInput" />
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