import React, { useEffect, useState } from 'react';
import User from "../images/image.jpg";
import Issue from "../images/alert.jpg";
import Waste from "../images/recycle-bin.jpg";
import { Link } from 'react-router-dom';
import { PieChart } from '@mui/x-charts/PieChart';
import "../css/admin.css"
const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [issues, setIssues] = useState([]);
    const [wastes, setWastes] = useState([]);
    const [pendingCount, setPendingCount] = useState(0);

    const fetchData = async () => {
        try {
            const usersResponse = await fetch(`http://localhost:4000/api/admin/allusers`, { method: 'GET' });
            const usersData = await usersResponse.json();
            setUsers(usersData);

            const issuesResponse = await fetch(`http://localhost:4000/api/admin/allissues`, { method: 'GET' });
            const issuesData = await issuesResponse.json();
            setIssues(issuesData);

            const wastesResponse = await fetch(`http://localhost:4000/api/admin/allwastes`, { method: 'GET' });
            const wastesData = await wastesResponse.json();
            setWastes(wastesData);
        } catch (error) {
            console.log("Error in fetching the data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const pendingIssues = issues.filter(issue => issue.status === "Pending").length;
        setPendingCount(pendingIssues);
    }, [issues]);

    const data = [
        { id: 0, value: issues.length, label: 'No of Issues Reported' },
        { id: 1, value: wastes.length, label: 'No of Wastes Scheduled' },
    ];

    const issueData = [
        { id: 0, value: pendingCount, label: 'No of Issues Pending', color: "red" },
        { id: 1, value: issues.length - pendingCount, label: 'No of Issues Completed', color: "green" },
    ];

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
            <div className='container d-flex my-5'>
                <PieChart
                    series={[
                        {
                            data: data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            labels: { display: false }, // Add this line to hide labels
                        },
                    ]}
                    height={200}
                />
                <PieChart
                    series={[
                        {
                            data: issueData,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            labels: { display: false }, // Add this line to hide labels
                        },
                    ]}
                    height={200}
                />
            </div>
        </>
    );
};

export default AdminDashboard;
