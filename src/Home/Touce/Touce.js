import React from 'react';
import './Touce.css'

const Touce = () => {
    return (
        <div className='touch-all'>
            <h1>Get In Touch</h1>
            <div>
            <input type="email" name="email" placeholder='Enter your email' id="" required/>
               <input type="password" placeholder='Enter your epassword' name="password" id="" required/>
            </div>
            <button>Submit</button>
        </div>
    );
};

export default Touce;