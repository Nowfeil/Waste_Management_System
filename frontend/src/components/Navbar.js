import React from 'react'
import '../css/styles.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div style={{backgroundColor:'green'}}>
      <nav >
            <div className="logo">WasteWise</div>
            <ul className="nav-links" >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
    </div>
  )
}
