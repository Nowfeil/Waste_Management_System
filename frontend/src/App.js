import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <Login setIsLoggedIn={setIsLoggedIn} />
              <Footer />
            </>
          } />
          <Route path="/" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <Home isLoggedIn={isLoggedIn} />
              <Footer />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <Signup setIsLoggedIn={setIsLoggedIn} />
              <Footer />
            </>
          } />
          <Route path="/logout" element={
              <Logout setIsLoggedIn={setIsLoggedIn} />
          } />
          <Route path="/profile" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <Profile setIsLoggedIn={setIsLoggedIn} />
              <Footer />
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
