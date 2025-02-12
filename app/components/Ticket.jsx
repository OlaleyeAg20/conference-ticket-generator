import Image from 'next/image';
import React from 'react';
import { Context } from '../page';

const Ticket = ({ref}) => {

  const {profileImgSrc, userName, ticketType, email, ticketQuantity} = React.useContext(Context);

  return (
    <div className='ticketContainer' ref={ref} >
        {/* <div></div>

        <hr />


        <div></div> */}

        <div className="mainContainer">
          <div className="innerMainContainer">
            <div className='ticketHeaderDiv'>
              <h2 className='ticketHeader'>Techember Fest ”25</h2>
              <p>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
            </div>

            <Image className='profileImg' src={profileImgSrc} width={140} height={200} alt='profile image' />

            <div className="tableContainer">
                <table className='customTable'>
                  <tbody>
                    <tr>
                      <td><span className="label">Name:</span><br /> {userName}</td>
                      <td className='borderRow'><span className="label">Email:</span><br /> {email}</td>
                    </tr>
                    <tr>
                      <td><span className="label">Ticket Type:</span><br /> {ticketType[0].toUpperCase() + ticketType.slice(1, ticketType.length)}</td>
                      <td className='borderRow'><span className="label">Tecket for:</span><br /> {ticketQuantity}</td>
                    </tr>
                  </tbody>
                </table>
                <p className='specialRequest'>Special request?</p>
                <p className='specialRequestText'>
                  Nil ? Or the users sad story they write in there gets this whole space, Max of three rows
                </p>
            </div>
          </div>
          <div className='barcodeDiv'>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode1'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode1'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode1'></div>
            <div className='barcode'></div>
            <div className='barcode1'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode1'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode1'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode1'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
            <div className='barcode'></div>
          </div>
        </div>

        {/* Ticket divisor line */}
        <div className='ticketDivisor'>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            {/* <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span>
            <span className="divisorNode"></span> */}
        </div>


        {/* Circle edges */}
        <span className='edgeCircle edgeCircle1'></span>
        <span className='edgeCircle edgeCircle2'></span>
        <span className='edgeCircle edgeCircle3'></span>
        <span className='edgeCircle edgeCircle4'></span>
        <span className='edgeCircle edgeCircle5'></span>
        <span className='edgeCircle edgeCircle6'></span>
    </div>
  )
}

export default Ticket