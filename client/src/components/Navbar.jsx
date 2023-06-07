import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo2.png";
export function Navbar(){
    return (
      <div className='navbar'>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt=''></img>
          </div>
          <div className="links">
            <Link className='link' to="/?cat=sports"><h6>SPORTS</h6></Link>
            <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
            <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
            <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
            <Link className='link' to="/?cat=foriegn_affairs"><h6>FORIEGN AFFAIRS</h6></Link>
            <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
            <span>JOHN</span>
            <span>LOGOUT</span>
            <span className='write'>
              <Link className='link' to="/write">Write</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
  
  
