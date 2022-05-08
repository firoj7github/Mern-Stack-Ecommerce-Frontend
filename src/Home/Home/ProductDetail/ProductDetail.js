
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    
    const navigate= useNavigate();
    const handleProtect = ()=>{
          navigate('/manage inventoris')
    }
    const [quantity, setQuantity]=useState(0);
    
    const handleQuantity = ()=>{
      let quantity=10;
      const newQuantity = quantity + 1;
      setQuantity(newQuantity)
    }
    const orderQuantity = ()=>{
      let quantity =10;
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
    return (
        <div className='all'>
          <Link to='/manageInventoris'><button onClick={handleProtect}>Manage Inventoris</button></Link> 

          <div className='quantity'>
            <h2 >*** Quantity Calculation ***</h2>
            <h3>{quantity}</h3>
            <button onClick={handleQuantity}>Add Quantity</button>
            <button onClick={orderQuantity}>Ordered</button>
          </div>
        </div>
    );
};

export default ProductDetail;