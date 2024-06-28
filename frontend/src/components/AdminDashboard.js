import React, { useEffect, useState } from 'react';
import User from "../images/image.jpg";
import Issue from "../images/alert.jpg";
import Waste from "../images/recycle-bin.jpg";

import { Link } from 'react-router-dom';
const AdminDashboard = () => {
    const [users, setUsers] = useState([])
    const [issues, setIssues] = useState([])
    const [collections, setCollections] = useState([])
    const fetchData=async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/admin/allusers`, { method: 'GET' });
            const data = await response.json();
            setUsers(data);
        } catch {
        console.log("Error in fetching the data");
        }    
    }
    useEffect(() => {
        fetchData();
    }, []);

    const fetchIssues=async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/admin/allissues`, { method: 'GET' });
            const data = await response.json();
            setIssues(data);
        } catch {
        console.log("Error in fetching the data");
        }    
    }
    useEffect(() => {
        fetchIssues();
    }, []);

    const fetchCollections=async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/admin/allissues`, { method: 'GET' });
            const data = await response.json();
            setIssues(data);
        } catch {
        console.log("Error in fetching the data");
        }    
    }
    useEffect(() => {
        fetchIssues();
    }, []);

    const [wastes, getWastes] = useState([])

    const fetchWaste=async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/admin/allwastes`, { method: 'GET' });
            const data = await response.json();
            getWastes(data);
        } catch {
        console.log("Error in fetching the data");
        }    
    }
    useEffect(() => {
        fetchWaste();
    }, []);

    return (
        <>
            <style>
                {`
                    th {
                        user-select: none;
                    }
                    
                `}
            </style>
            <h2 className='text-center'>Admin Dashboard</h2>
            <div className='container d-flex justify-content-center align-items-center p-3' style={{ gap: "20px" }}>
                <div className="card p-2" style={{ width: "18rem;" }} >
                    <div className='container'>
                        <img src={User} className="card-img-top" alt="" style={{ width: "20px" }} />
                        <div className="container p-4">
                            <p className='card-text text-center'>{users.length}</p>
                            <p className="card-text">All Users</p>
                            <Link to="/allusers">View</Link>
                        </div>
                    </div>
                </div>
                <div className="card p-2" style={{ width: "18rem;" }} >
                    <div className='container'>
                        <img src={Issue} className="card-img-top" alt="" style={{ width: "20px" }} />
                        <div className="container p-4">
                            <p className='card-text text-center'>{issues.length}</p>
                            <p className="card-text">Issues Count</p>
                            <Link to="/allissues">View</Link>
                        </div>
                    </div>
                </div>
                <div className="card p-2" style={{ width: "18rem;" }}>
                    <div className='container'>
                        <img src={Waste} className="card-img-top" alt="" style={{ width: "20px" }} />
                        <div className="container p-4">
                            <p className='card-text text-center'>{wastes.length}</p>
                            <p className="card-text">Waste Scheduled Count</p>
                            <Link to="/allwastes">View</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
};

export default AdminDashboard