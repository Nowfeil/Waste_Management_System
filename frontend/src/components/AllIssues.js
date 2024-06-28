import React, { useState , useEffect} from 'react';
const AllUsers = () => {
    const [issues, getIssues] = useState([])

    const fetchData=async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/admin/allissues`, { method: 'GET' });
            const data = await response.json();
            getIssues(data);
        } catch {
        console.log("Error in fetching the data");
        }    
    }
    useEffect(() => {
        fetchData();
    }, []);
    const [sortDirection, setSortDirection] = useState('asc');
    const [sortBy, setSortBy] = useState(null);
    const handleHeaderDoubleClick = (header) => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(direction);
        setSortBy(header);

        const sortedArray = [...issues].sort((a, b) => {
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

        getIssues(sortedArray);
    };
    return (
    <div className="container mt-4">
      <h1 className="text-center">Reported Issues</h1>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col"  onDoubleClick={() => handleHeaderDoubleClick('uid')} style={{cursor:"pointer"}}>User Id</th>
            <th scope="col"  onDoubleClick={() => handleHeaderDoubleClick('collectionId')} style={{cursor:"pointer"}}>Collection Id</th>
            <th scope="col"  onDoubleClick={() => handleHeaderDoubleClick('issueId')} style={{cursor:"pointer"}}>Issue Id</th>
            <th scope="col"  onDoubleClick={() => handleHeaderDoubleClick('issueType')} style={{cursor:"pointer"}}>Issue Type</th>
            <th scope="col"  onDoubleClick={() => handleHeaderDoubleClick('issueDescription')} style={{cursor:"pointer"}}>Issue Description</th>
            <th scope="col"  onDoubleClick={() => handleHeaderDoubleClick('status')} style={{cursor:"pointer"}}>Issue Status</th>
          </tr>
        </thead>
        <tbody>
        {
            issues.map((row) => (
            <tr key={row.id}>
                <td>{row.uid}</td>
                <td>{row.collectionId}</td>
                <td>{row.issueId}</td>
                <td>{row.issueType}</td>
                <td>{row.issueDescription}</td>
                <td>{row.status}</td>
            </tr>
            ))
        }
        </tbody>
      </table>
    </div>
    )
};

export default AllUsers