import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>Something seems to be wrong</p>
        <span>
          Already have an account. <Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register
