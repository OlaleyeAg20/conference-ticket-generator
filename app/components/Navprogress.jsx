import React from 'react'
import './style.css'

export const Navprogress = () => {
  return (
    <div className='navprogress'>
        <h1>Ticket Selection</h1>
        <span>Step 1/3</span>
        <span className="bar">
            <span className='bar-child'></span>
        </span>
    </div>
  )
}
