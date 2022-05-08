import React, { useEffect, useState } from 'react';

import './ManageInventoris.css'

const ManageInventoris = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => setServices(data));
    },[])
    const handleDelete = id=>{
        const proceed = window.confirm('Are You sure???');
        if(proceed){
        const url = `http://localhost:5000/service/${id}`
        fetch(url, {
        method : 'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            const remaing = services.filter(service=> service._id !== id);
            setServices(remaing);
        })
        }
    }
    
    return (
        <div className='manage-title'>
            <h5>Manage All Inventoris</h5>
            <div className='manage-all'>
          {
              services.map(service=> 
                <div className='detail'>
                <img src={service.img}></img>
                <h2>{service.price}</h2>
                <h1>{service.name}</h1>
                <p>Quantity : {service.quantity}</p>
                <p>{service.supplaier}</p>
                <p>{service.description}</p>
                <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>
              )
          }
          
          
        </div>
        <button>Add Item</button>
        </div>
        
    );
};

export default ManageInventoris;