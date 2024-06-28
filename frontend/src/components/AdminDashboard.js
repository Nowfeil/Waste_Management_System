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

    const [sortDirection, setSortDirection] = useState('asc');
    const [sortBy, setSortBy] = useState(null);
    const handleHeaderDoubleClick = (header) => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(direction);
        setSortBy(header);

        const sortedArray = [...users].sort((a, b) => {
            if (direction === 'asc') {
                if (a[header] < b[header]) return -1;
                if (a[header] > b[header]) return 1;
                return 0;
            } else {
                if (a[header] < b[header]) return 1;
                if (a[header] > b[header]) return -1;
                return 0;
            }
        });

        setUsers(sortedArray);
    };
    const handleStatus=(idx)=>{
        const updatedArr=[...users]
        updatedArr[idx].Status="completed"
        setUsers(updatedArr)
    }

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
                        <div className="card-body">
                            <p className='card-text text-center'>{users.length}</p>
                            <p className="card-text">All Users</p>
                            <Link to="/allusers">View</Link>
                        </div>
                    </div>
                </div>
                <div className="card p-2" style={{ width: "18rem;" }} >
                    <div className='container'>
                        <img src={Issue} className="card-img-top" alt="" style={{ width: "20px" }} />
                        <div className="card-body">
                            <p className='card-text text-center'>{issues.length}</p>
                            <p className="card-text">Issues Count</p>
                            <Link to="/allusers">View</Link>
                        </div>
                    </div>
                </div>
                <div className="card p-2" style={{ width: "18rem;" }}>
                    <div className='container'>
                        <img src={Waste} className="card-img-top" alt="" style={{ width: "20px" }} />
                        <div className="card-body">
                            <p className='card-text text-center'>0</p>
                            <p className="card-text">Waste Scheduled Count</p>
                            <Link to="/allusers">View</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                {/* <h1 className="text-center">All Users</h1> */}
                    {/* <table className="table table-hover">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col"  onDoubleClick={() => handleHeaderDoubleClick('uid')} style={{cursor:"pointer"}}>User Id</th>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('collectionId')} style={{cursor:"pointer"}}>Collection Id</th>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('issueType')} style={{cursor:"pointer"}}>IssueType</th>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('issueDescription')} style={{cursor:"pointer"}}>IssueDescription</th>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('status')} style={{cursor:"pointer"}}>Status</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((row) => (
                            <tr key={row.id}>
                                <td>{row.uid}</td>
                                <td>{row.collectionId}</td>
                                <td>{row.issueType}</td>
                                <td>{row.issueDescription}</td>
                                <td>{row.status}</td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table> */}
            </div>
        </>
    )
};

export default AdminDashboard