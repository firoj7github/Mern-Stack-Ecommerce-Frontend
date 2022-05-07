import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import './Inventory.css'

const Inventory = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className='inventory'>
            <h1>Inventory Managment</h1>
            <h3>Find Your Color</h3>
            <div className='inventory-all'>
            {
                services.slice(0, 6).map(service=> <Detail key={service._id} service={service}></Detail>)
            }
        </div>
        </div>
        
    );
};

export default Inventory;