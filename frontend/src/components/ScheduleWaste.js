import React from 'react'
import { useNavigate } from 'react-router'
export default function ScheduleWaste(isLoggedIn) {
    const navigate = useNavigate();
  return (
        isLoggedIn ? <div className='container'>
        </div>
        :navigate("/login")
  )
}
