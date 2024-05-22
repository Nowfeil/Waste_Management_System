import React, { useEffect, useState } from 'react'

export default function Profile({setIsLoggedIn,userData}) {
const [email,setEmail] = useState(userData.email);
const [uname,setUname] = useState(userData.username);
const [address,setAddress] = useState(userData.address);
const [phone,setPhone] = useState(userData.phone);
const [edit,setEdit] = useState(false);
const [text,setText] = useState('Edit');
const handleEmailChange = (e)=>{
  setEmail(e.target.value)
}

const handleNameChange=(e)=>{
  setUname(e.target.value)
}

const setAddressChange=(e)=>{
  setAddress(e.target.value)
}

const setMobileChange=(e)=>{
  setPhone(e.target.value)
}

const handleEdit = (e)=>{
  setEdit(!edit)
  !edit ? setText('Save'):setText('Edit')
  
}




return (
    <div>
      <div className='container'>
        <h1 className='text-center'>Profile</h1>
            <div class="form-floating mb-3" style={{gap:"20px"}}>
                <input type="email" class="form-control" id="floatingInput" value={email} onChange={handleEmailChange} disabled={!edit}/>
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3 d-flex" style={{gap:"20px"}}>
                <input type="text" class="form-control" id="floatingInput" value={uname} onChange={handleNameChange} disabled={!edit}/>
                <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating mb-3 d-flex" style={{gap:"20px"}}>
                <input type="text" class="form-control" id="floatingInput" value={phone} onChange={setMobileChange} disabled={!edit}/>
                <label for="floatingInput">Mobile Number</label>
            </div>
            <div class="form-floating mb-3 d-flex" style={{gap:"20px"}}>
                <input type="text" class="form-control" id="floatingInput" value={address} onChange={setAddressChange} disabled={!edit}/>
                <label for="floatingInput">Address</label>
            </div>
            <div className='container p-2 d-flex justify-content-center align-content-center'>
              <button className='btn btn-primary' onClick={handleEdit}>{text}</button>
            </div>
      </div>
    </div>
  )
}

