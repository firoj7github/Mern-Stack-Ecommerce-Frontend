import { faFaceKissBeam } from '@fortawesome/free-regular-svg-icons';
import { faAppleAlt, faWheatAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer-all'>
         <div className='footer-1'>
             <h2>Help & Support</h2>
             <p>This site is here to help. Discover our office locations and different ways to contact us everytime.</p>
             
             </div> 
         <div className='footer-2'>
             <h2>Our Location</h2>
             <p>Dhaka Office</p>
             <p>1200, Savar Dhaka</p>
             </div> 
         <div className='footer-3'>
             <h2>Contact Us</h2>
             <p>01845126598</p>
             <p>01320728546</p>
             <p>01741236901</p>
             
            
             </div> 
          
        </div>
    );
};

export default Footer;