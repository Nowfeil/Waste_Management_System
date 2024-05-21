import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
    <main>
        <section className="hero">
            <h1>Welcome to WasteWise</h1>
            <p>Revolutionizing Waste Management for Cleaner Communities</p>
            <Link to="/signup" className="btn">Get Started</Link>
        </section>
        
        <section id="features" className="features">
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
        
        <section id="about" className="about">
            <h2>About WasteWise</h2>
            <p>Efficient waste management is essential for maintaining clean and sustainable urban and rural environments. WasteWise addresses the challenges of traditional waste management systems by providing a transparent and user-friendly platform for scheduling waste collection, tracking progress, and reporting issues.</p>
        </section>
    </main>

    </div>
  )
}
