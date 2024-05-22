import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
import waste_disposal from '../images/waste_disposal.jpg'
import waste_treatement from '../images/waste_treatement.jpg'
import waste_recycling from '../images/waste_recycling.jpeg'
import waste_transport from '../images/waste_transport.jpg'
export default function Home({isLoggedIn}) {
  return (
    <div>
    <main>
        <section className="hero">
            <h1>Welcome to WasteWise</h1>
            <p>Revolutionizing Waste Management for Cleaner Communities</p>
            {!isLoggedIn&&<Link to="/signup" className="btn">Get Started</Link>}
        </section>
        <section id="services" className="features">
            <h2>Features</h2>
            <div className="feature-item">
                <h3>User Authentication</h3>
                <p>Secure login and registration for all users.</p>
            </div>
            <div className="feature-item">
                <h3>Waste Collection Scheduling</h3>
                <p>Easy scheduling of waste pickups at your convenience.</p>
            </div>
            <div className="feature-item">
                <h3>Real-Time Tracking</h3>
                <p>Track the status of your waste collection requests in real-time.</p>
            </div>
            <div className="feature-item">
                <h3>Issue Reporting</h3>
                <p>Report any issues related to waste management effortlessly.</p>
            </div>
        </section>
        <section id="features" className="features">
            <div className='container d-flex' style={{gap:"10px"}}>
                <div className="card" style={{width: "18rem;"}}>
                    <img src={waste_disposal} className="card-img-top" alt="..." width={"250px"} height={"200px"}/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Disposal</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "18rem;"}}>
                    <img src={waste_treatement} className="card-img-top" alt="..." width={"250px"} height={"200px"}/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Treatement</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "18rem;"}}>
                    <img src={waste_recycling} className="card-img-top" alt="..." width={"250px"} height={"200px"}/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Recycling</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "18rem;"}}>
                    <img src={waste_transport} className="card-img-top" alt="..." width={"250px"} height={"200px"}/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Collection and Transportation</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            {
                isLoggedIn?<Link to="/schedulewaste"><button className='btn btn-primary my-3'>Schedule</button></Link>:<Link to="/login"><button className='btn btn-primary my-3'>Schedule</button></Link>
            }
            
        </section>
        <section id="about" className="about">
            <h2>About WasteWise</h2>
            <p>Efficient waste management is essential for maintaining clean and sustainable urban and rural environments. WasteWise addresses the challenges of traditional waste management systems by providing a transparent and user-friendly platform for scheduling waste collection, tracking progress, and reporting issues.</p>
        </section>
    </main>
    </div>
  )
}
