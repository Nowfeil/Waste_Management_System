import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../css/issue.css';

function DisplayWaste({ userData, isLoggedIn, scheduled, setSchedule,lodgeComplaint}) {
  const [waste, setWaste] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    collectionDate: '',
    address: '',
    notes: ''
  });
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/collections/${userData.uid}`, { method: 'GET' });
      const data = await response.json();
      setWaste(data);
    } catch {
      console.log("Error in fetching the data");
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    fetchData();
  }, [isLoggedIn]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDelete = async (cid) => {
    try {
      await fetch(`http://localhost:4000/api/collections/${cid}`, { method: "DELETE" });
      setSchedule(scheduled - 1);
      
      fetchData();
    } catch {
      console.log("Error in deleting the data");
    }

    try{
      const response = await fetch('http://localhost:4000/api/issues');
      const data = await response.json();
      console.log("after",data);
      console.log("length:",data.length)
      lodgeComplaint(data.length)
    }
    catch {
      console.log("Error in deleting the data of this deleted collection");
    }
  };

  const handleEdit = (row) => {
    if (editingId === row.collectionId) {
      setEditingId(null);
    } else {
      setEditingId(row.collectionId);
      setFormData({
        collectionDate: row.collectionDate,
        address: row.address,
        notes: row.notes
      });
    }
  };
  const handleReport=async (cid)=>{
      try{
          navigate('/issuereport', { state: { data: cid } })
      }
      catch{
        console.log("Error in navigating to report page")
      }
  }
  const handleSave = async () => {
    try {
      await fetch(`http://localhost:4000/api/collections/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setEditingId(null);
      fetchData(); 
    } catch {
      console.log("Error in updating the data");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Scheduled Waste</h1>
      <div className="row">
        {waste.map((row) => (
          <div className="col-md-4 mb-4" key={row.collectionId}>
            <div className="card h-100 hover-enlarge">
              <div className="card-body cardBody">
                <h4>ID: {row.collectionId}</h4>
                <label htmlFor={`date-${row.collectionId}`}>Collection Date: </label>
                <input
                  type='date'
                  id={`date-${row.collectionId}`}
                  name='collectionDate'
                  value={editingId === row.collectionId ? formData.collectionDate : row.collectionDate}
                  onChange={handleChange}
                  disabled={editingId !== row.collectionId}
                />
                <label htmlFor={`address-${row.collectionId}`}>Address: </label>
                <input
                  type='text'
                  id={`address-${row.collectionId}`}
                  name='address'
                  value={editingId === row.collectionId ? formData.address : row.address}
                  onChange={handleChange}
                  disabled={editingId !== row.collectionId}
                />
                <label htmlFor={`notes-${row.collectionId}`}>Notes: </label>
                <input
                  type='text'
                  id={`notes-${row.collectionId}`}
                  name='notes'
                  value={editingId === row.collectionId ? formData.notes : row.notes}
                  onChange={handleChange}
                  disabled={editingId !== row.collectionId}
                />
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (editingId === row.collectionId) {
                        handleSave();
                      } else {
                        handleEdit(row);
                      }
                    }}
                  >
                    {editingId === row.collectionId ? 'Save' : 'Update'}
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(row.collectionId)}>Delete</button>
                  {/* <Link to="/issuereport"><button className="btn btn-secondary">Report</button></Link> */}
                  <button className="btn btn-secondary" onClick={() => handleReport(row.collectionId)}>Report</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayWaste;



