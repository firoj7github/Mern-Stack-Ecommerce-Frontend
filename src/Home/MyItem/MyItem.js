import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const MyItem = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            {
                services.slice(8, 30).map(service=> <div className='detail'>
                <img src={service.img}></img>
                <h2>{service.price}</h2>
                <h1>{service.name}</h1>
                <p>Quantity : {service.quantity}</p>
                <p>{service.supplaier}</p>
                <p>{service.description}</p>
                </div>
                )
            }
        </div>
    );
};

export default MyItem;