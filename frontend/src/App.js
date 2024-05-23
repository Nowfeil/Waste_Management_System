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
import ScheduleWaste from './components/ScheduleWaste';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData,setUserData] = useState('')
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData} />
              <Login setIsLoggedIn={setIsLoggedIn} setUserData = {setUserData}/>
              <Footer />
            </>
          } />
          <Route path="/" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData}/>
              <Home isLoggedIn={isLoggedIn} setUserData = {setUserData} userData={userData}/>
              <Footer />
            </>
          } />
          <Route path="/signup" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <Signup setIsLoggedIn={setIsLoggedIn} setUserData = {setUserData}/>
              <Footer />
            </>
          } />
          <Route path="/logout" element={
              <Logout setIsLoggedIn={setIsLoggedIn} />
          } />
          <Route path="/profile" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData}/>
              <Profile setIsLoggedIn={setIsLoggedIn} userData={userData}/>
              <Footer />
            </>
          }/>
          <Route path="/schedulewaste" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData}/>
              <ScheduleWaste isLoggedIn={isLoggedIn}/>
              <Footer />
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
