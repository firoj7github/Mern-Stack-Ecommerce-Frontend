import React, { useEffect, useState } from 'react';
import Manage from '../Manage/Manage';
import './ManageInventoris.css'

const ManageInventoris = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data => setServices(data));
    },[])
    
    return (
        <div className='manage-title'>
            <h5>Manage All Inventoris</h5>
            <div className='manage-all'>
          {
              services.map(service=> <Manage service={service}></Manage>)
          }
        </div>
        <button>Add Item</button>
        </div>
        
    );
};

export default ManageInventoris;