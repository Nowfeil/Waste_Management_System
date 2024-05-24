import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'; 
import '../css/waste.css';

const ScheduleWaste = ({userData,isLoggedIn,setSchedule,scheduled,isDelete,setIsDelete}) => {
  const [submit, isSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/login")
    }
  },[isLoggedIn])
  const [formData, setFormData] = useState({
    collectionDate: '',
    address: '',
    notes: ''
  });
  console.log(userData);
  formData.uid = userData.uid;
  console.log(formData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    fetch("http://localhost:4000/api/collections/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        isSubmit(true);
        navigate('/dashboard');
        setSchedule(scheduled+1);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
  };
  return (
    <div className='container'>
      <h2 className='text-center'>Schedule Waste Here!!</h2>
      <form className="waste-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="collectionDate">Collection Date</label>
          <input
            type="date"
            id="collectionDate"
            name="collectionDate"
            value={formData.collectionDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">Schedule waste</button>
      </form>
    </div>
  );
};

export default ScheduleWaste;
