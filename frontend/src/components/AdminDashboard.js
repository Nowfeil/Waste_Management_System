import React, { useState } from 'react';
import User from "../images/image.jpg";
import Issue from "../images/alert.jpg";
import Waste from "../images/recycle-bin.jpg";

const AdminDashboard = () => {
    const [tempArray, setTempArray] = useState([
        { UserId: 1234567, Name: "Mark", Description: "Collect Waste", Status: "completed" },
        { UserId: 234545, Name: "Rakesh", Description: "Pick Waste", Status: "pending" },
        { UserId: 12334, Name: "Shiva", Description: "Collect Waste", Status: "completed" }
    ]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortBy, setSortBy] = useState(null);
    const handleHeaderDoubleClick = (header) => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(direction);
        setSortBy(header);

        const sortedArray = [...tempArray].sort((a, b) => {
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

        setTempArray(sortedArray);
    };
    const handleStatus=(idx)=>{
        const updatedArr=[...tempArray]
        updatedArr[idx].Status="completed"
        setTempArray(updatedArr)
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
                            <p className='card-text text-center'>0</p>
                            <p className="card-text">All Users</p>
                        </div>
                    </div>
                </div>
                <div className="card p-2" style={{ width: "18rem;" }} >
                    <div className='container'>
                        <img src={Issue} className="card-img-top" alt="" style={{ width: "20px" }} />
                        <div className="card-body">
                            <p className='card-text text-center'>0</p>
                            <p className="card-text">Issues Count</p>
                        </div>
                    </div>
                </div>
                <div className="card p-2" style={{ width: "18rem;" }}>
                    <div className='container'>
                        <img src={Waste} className="card-img-top" alt="" style={{ width: "20px" }} />
                        <div className="card-body">
                            <p className='card-text text-center'>0</p>
                            <p className="card-text">Waste Scheduled Count</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container p-2'>
                <table className="table table-success table-hover">
                    <thead>
                        <tr>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('UserId')} style={{cursor:"pointer"}}>UserId</th>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('Name')} style={{cursor:"pointer"}}>Name</th>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('Description')} style={{cursor:"pointer"}}>Description</th>
                            <th scope="col" onDoubleClick={() => handleHeaderDoubleClick('Status')} style={{cursor:"pointer"}}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tempArray.map((row, index) => (
                            <tr key={index}>
                                <th scope="row">{row.UserId}</th>
                                <td>{row.Name}</td>
                                <td>{row.Description}</td>
                                <td onClick={()=>handleStatus(index)}>
                                    {
                                        row.Status === "completed" ? <span className={`badge text-bg-success`}>{row.Status}</span> : <span className={`badge text-bg-danger`}>{row.Status}</span>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default AdminDashboard