import React from 'react'
import { Link } from 'react-router-dom'
export function Register() {
  return (
    <div className='auth'>
      <h1>
        Register
      </h1>
      <form>
        <input required type='text' placeholder='username'></input>
        <input required type='email' placeholder='email'></input>
        <input required type='password' placeholder='password'></input>
        <button>Register</button>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}


