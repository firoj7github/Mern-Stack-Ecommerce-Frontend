import React from 'react';
import './Feature.css'
import img3 from '../../../image/color.png'
import img4 from '../../../image/safarulla-kasmi-uTPkovVRhR8-unsplash.jpg'
import { faAppleAlt, faCircle, faPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Feature = () => {
    const items = ['Arsenic free glass','Pro-max Qualites' , 'Latest box model', 'Custom free offer', 'Offers packaging', ' Friendly package'
        
    ]
    return (
        <div className='feature-all'>
            <div className='feature-img1'>
            <img src={img4} alt=''></img>   
            </div>
            <div className='feature-title'>
            <FontAwesomeIcon
             className='icon-1' icon={faAppleAlt} />
             <h1>Features</h1>
             <div className='all'>
             <p>
             <FontAwesomeIcon
             className='icon-2'  icon={faCircle} />
             {items[0]}
             </p>
             <p>
             <FontAwesomeIcon
             className='icon-2'  icon={faCircle} />
             {items[1]}
             </p>
             <p>
             <FontAwesomeIcon
             className='icon-2'  icon={faCircle} />
             {items[2]}
             </p>
             <p>
             <FontAwesomeIcon
             className='icon-2'  icon={faCircle} />
             {items[3]}
             </p>
             <p>
             <FontAwesomeIcon
             className='icon-2'  icon={faCircle} />
             {items[4]}
             </p>
             <p>
             <FontAwesomeIcon
             className='icon-2'  icon={faCircle} />
             {items[5]}
             </p>
             
             </div>
             
            </div>
            <div className='feature-img2'>
                <img src={img3} alt=''></img>
            </div>
            
        </div>
    );
};

export default Feature;