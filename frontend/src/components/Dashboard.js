import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/styles.css'
export default function Dashboard({ isLoggedIn,scheduled,complaint,userData }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);
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
  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
    {isLoggedIn &&greet &&
                          <div class="alert alert-success text-center" role="alert">
                              Welcome {userData.username}
                          </div>
    }
    <div className='container p-5'>
      <div className='container d-flex justify-content-center' style={{ gap: '1rem' }}>
        <div className='card mb-5 bg-body-tertiary rounded' style={{ width: '18rem', }}>
          <div className='card-body' style={{backgroundColor:"#E0FBE2"}}>
            <h5 className='card-title'>Total Lodged Complain</h5>
            <p className='card-text my-2'>{complaint}</p>
            <Link to="/displayissues">View Details</Link>
          </div>
        </div>
        <div className='card mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
          <div className='card-body' style={{backgroundColor:"#E0FBE2"}}>
            <h5 className='card-title '>Pending Lodged Complain</h5>
            <p className='card-text my-2'>0</p>
          </div>
        </div>
        <div className='card  mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
          <div className='card-body' style={{backgroundColor:"#E0FBE2"}}>
            <h5 className='card-title'>Total Waste Scheduled</h5>
            <p className='card-text'>{scheduled}</p>
            <Link to="/getWaste">View Details</Link>
          </div>
        </div>
        <div className='card mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
          <div className='card-body' style={{backgroundColor:"#E0FBE2"}}>
            <h5 className='card-title'>Scheduled Waste Completed</h5>
            <p className='card-text'>0</p>
          </div>
        </div>
      </div>
    </div>
    <div className='container d-flex justify-content-center align-content-center ' style={{gap:"1rem"}}>
        <Link to="/schedulewaste"><button className='btn btn-primary'>Schedule Waste</button></Link>
    </div>
    </>
  );
}
