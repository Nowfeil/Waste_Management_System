import React, { useEffect } from 'react'

export default function DisplayWaste() {
  useEffect(()=>{
    fetch('http:/local')
  })
  return (
    <div className='container'>
        <h1>Scheduled Waste</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Collection Id</th>
                    <th scope="col">Date Scheduled</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
  )
}
