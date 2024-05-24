import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router';
function DisplayIssues({userData,isLoggedIn}){
    const [issue,setIssue]=useState([])
    const navigate = useNavigate()
    const fetchData= async ()=>{
        try{
            const response = await fetch(`http://localhost:4000/api/issues/${userData.uid}`,{method:'GET'});
            const data = await response.json();
            setIssue(data);
        }
        catch{
          console.log("Error in fetching the data");
        }
    }
    useEffect(()=>{
      if(!isLoggedIn){
        navigate("/login")
      }
        fetchData()
    },[isLoggedIn])
    return(
      <div className="container mt-4">
      <h1 className="text-center">Lodged Complaints</h1>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Issue Type</th>
            <th scope="col">Issue Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            issue.map((row) => (
              <tr key={row._id}>
                <th >{row.uid}</th>
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
}
export default DisplayIssues
