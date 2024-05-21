import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn }) {
  return (
    <div style={{ backgroundColor: 'green' }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Waste Management</Link>
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
        </div>
      </nav>
    </div>
  );
}
