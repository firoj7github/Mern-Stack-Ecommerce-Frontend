import React from 'react';
import './Side.css'
import img1 from '../../../image/gril.png'

const Side = () => {
    return (
        <div className='side-all'>
            <div className='side-title'>
        <h1>Apple W1 Headphone</h1>
        <h4>Custom Comfort</h4>
        <p>Beats Solo3 Wireless stays true to its predecessor with bold styling and a streamlined design. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day listening comfort. The headphone’s fast-flowing curves and pivoting ear cups complete this natural fit, designed for optimal comfort and sound delivery.</p>
        <button>Read More</button>
            </div>
            <div className='side-img'>
              <img src={img1} alt=''></img>  
            </div>
            
        </div>
    );
};

export default Side;