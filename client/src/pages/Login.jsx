import React from 'react'
import { Link } from 'react-router-dom'
export function Login() {
  return (
    <div className='auth'>
      <h1>
        Login
      </h1>
      <form>
        <input type='text' placeholder='username'></input>
        <input type='password' placeholder='password'></input>
        <button>Login</button>
        <span>Don't you have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}


