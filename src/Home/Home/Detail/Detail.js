import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Detail.css'

const Detail = ({service}) => {
    const {id, name, img, price, description, quantity,supplaier }=service;
    const navigate = useNavigate();
    const handleUpdate = id =>{
          navigate(`/service/${id}`);
    }
   
    return (
        <div className='detail-all'>
            <div className='detail'>
            <img src={img}></img>
            <h2>{price}</h2>
            <h1>{name}</h1>
            <p>Quantity : {quantity}</p>
            <p>{supplaier}</p>
            <p>{description}</p>
            
           
            <button onClick={()=> handleUpdate(id)}>Update</button>
            
            </div>
            
        </div>
    );
};

export default Detail;