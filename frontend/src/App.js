import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import ScheduleWaste from './components/ScheduleWaste';
import Dashboard from './components/Dashboard';
import IssueReport from './components/IssueReport'
import DisplayWaste from './components/DisplayWaste'
import DisplayIssues from './components/DisplayIssues';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData,setUserData] = useState('')
  const [scheduled,setSchedule] = useState(0);
  const [complaint,lodgeComplaint] = useState(0);
  console.log(`http:localhost:4000/api/collections/${userData.uid}`);
  useEffect(()=>{
    fetch(`http://localhost:4000/api/collections/${userData.uid}`).then((response)=>response.json()).then((data)=>setSchedule(data.length))
    fetch(`http://localhost:4000/api/issues/${userData.uid}`).then((response)=>response.json()).then((data)=>lodgeComplaint(data.length))
  },[isLoggedIn,userData])

  
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
              <ScheduleWaste isLoggedIn={isLoggedIn} userData={userData} scheduled={scheduled} setSchedule={setSchedule}/>
              <Footer />
            </>
          }/>
          <Route path="/dashboard" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData}/>
              <Dashboard isLoggedIn={isLoggedIn} scheduled={scheduled} complaint={complaint}/>
              <Footer />
            </>
          }/>
          <Route path="/getWaste" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData}/>
              <DisplayWaste isLoggedIn={isLoggedIn} userData={userData} scheduled={scheduled} setSchedule={setSchedule}/>
              <Footer />
            </>
          }/>
          <Route path="/issuereport" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData}/>
              <IssueReport isLoggedIn={isLoggedIn} userData={userData}/>
              <Footer />
            </>
        }/>
        <Route path="/displayissues" element={
            <>
              <Navbar isLoggedIn={isLoggedIn} userData={userData}/>
              <DisplayIssues isLoggedIn={isLoggedIn} userData={userData}/>
              <Footer />
            </>
        }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;