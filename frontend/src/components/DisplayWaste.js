import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
function DisplayWaste({userData,isLoggedIn,scheduled,setSchedule}){
    const [waste,setWaste]=useState([]);
    const navigate = useNavigate()
    const fetchData= async ()=>{
        try{
            const response = await fetch(`http://localhost:4000/api/collections/${userData.uid}`,{method:'GET'});
            const data = await response.json();
            setWaste(data);
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
    
    function handleDelete(cid){
      console.log("{userData.collectionId} : ",cid)
      const response=fetch(`http://localhost:4000/api/collections/${cid}`,{
        method:"delete"
      })
      setSchedule(scheduled-1);
      navigate("/dashboard")
    }
    return(
      <div className="container mt-4">
      <h1 className="text-center mb-4">Scheduled Waste</h1>
      <div className="row">
        {waste.map((row) => (
          <div className="col-md-4 mb-4" key={row.collectionId}>
            <div className="card h-100 hover-enlarge">
              <div className="card-body">
                <h5 className="card-title">Collection Id: {row.collectionId}</h5>
                <p className="card-text">Collection Date: {row.collectionDate}</p>
                <p className="card-text">Address: {row.address}</p>
                <div className="d-flex justify-content-between">
                  <button  className="btn btn-primary">Update</button>
                  <button className="btn btn-danger" onClick={()=>handleDelete(row.collectionId)}>Delete</button>
                  <Link to="/issuereport"><button className="btn btn-secondary">Report</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}
export default DisplayWaste