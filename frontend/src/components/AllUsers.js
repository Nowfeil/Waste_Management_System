import React, { useState , useEffect} from 'react';
const AllUsers = () => {
    const [users, setUsers] = useState([])

    /* fetching data */
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
    return (
        <div className="container mt-4">
      <h1 className="text-center">All Users</h1>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
        {
            users.map((row) => (
            <tr key={row.id}>
                <td>{row.uid}</td>
                <td>{row.username}</td>
                <td>{row.address}</td>
                <td>{row.phone}</td>
            </tr>
            ))
        }
        </tbody>
      </table>
    </div>
    )
};

export default AllUsers