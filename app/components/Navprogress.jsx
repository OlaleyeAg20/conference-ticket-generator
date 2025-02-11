import React from 'react'
import './style.css'
import { Context } from '../page';

export const Navprogress = () => {
  const {ticketHeader, steps} = React.useContext(Context);
  return (
    <div className='navprogress'>
        <h1>{ticketHeader}</h1>
        <span>Step {steps}/3</span>
        <span className="bar">
            <span className='bar-child' style={{width: `${steps * 33.33}%`}}></span>
        </span>
    </div>
  )
}
