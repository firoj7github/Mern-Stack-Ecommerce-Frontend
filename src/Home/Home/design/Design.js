import React from 'react';
import './Design.css'
import img from '../../../image/c72676467ae6def6cf1b97399a5a047e.png'

const Design = () => {
    return (
        <div className='design-all'>
            <div className='design-title'>
              <h1>Product</h1>
              <h2>Information</h2>
              <h3>Overview</h3>
              <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. <br/> <br/> Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. </p>
              <button>Read More</button>
            </div>
            <div className='design-img'>
             <img src={img} alt=''></img>  
            </div>
            
        </div>
    );
};

export default Design;