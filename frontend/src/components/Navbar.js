import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ isLoggedIn ,userData}) {
  const navigate = useNavigate();
  const [greet,setGreeting] = useState(false)
  useEffect(()=>{
    if(isLoggedIn){
      setGreeting(true)
      const time = setTimeout(()=>{
        setGreeting(false);
      },2000)
      return ()=>clearTimeout(time)
    }
  },[isLoggedIn])
  return (
<>    
    <div style={{ backgroundColor: 'green' }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Waste Management</Link>
          {isLoggedIn ? (
                <>
                  <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                </>
              ) : null
          }

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {isLoggedIn ? (
                <>
                  <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
                  <Link className="nav-link" to="/logout">Logout</Link>
                </>
              ) : (
                <>
                  <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                  <Link className="nav-link" to="/signup">Sign up</Link>
                </>
              )}
            </div>
          </div>
          {isLoggedIn && greet &&<div className='navbar-text ms-auto' style={{ fontSize: '1rem' }}>
            {<h3>Welcome {userData.username}</h3>}
          </div>
          }
        </div>
      </nav>
    </div>

</>
  );
}



