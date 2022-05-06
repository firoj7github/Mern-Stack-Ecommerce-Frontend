import React from 'react';
import './Manage.css'

const Manage = ({service}) => {
    const {id, name,img,  price, quantity, description, supplaier}=service;
    return (
        <div className='detail-all'>
        <div className='detail'>
        <img src={img}></img>
        <h2>{price}</h2>
        <h1>{name}</h1>
        <p>Quantity : {quantity}</p>
        <p>{supplaier}</p>
        <p>{description}</p>
        
       
        
        
        </div>
        
    </div>
    );
};

export default Manage;