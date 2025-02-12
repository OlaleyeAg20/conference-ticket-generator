import Image from 'next/image';
import React from 'react';

const Ticket = () => {
  return (
    <div className='ticketContainer'>
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

            <Image className='profileImg' src={'https://ayscript.vercel.app/assets/avater-N-aruFBS.png'} width={140} height={200} alt='profile image' />

            <div className="tableContainer">
                <table className='customTable'>
                  <tbody>
                    <tr>
                      <td>Row 1,<br /> Col 1</td>
                      <td className='borderRow'>Row 1,<br /> Col 2</td>
                    </tr>
                    <tr>
                      <td>Row 2,<br /> Col 1</td>
                      <td className='borderRow'>Row 2,<br /> Col 2</td>
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