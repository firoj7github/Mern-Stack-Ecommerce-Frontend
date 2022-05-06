
import { Link, useNavigate } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    
    const navigate= useNavigate();
    const handleProtect = ()=>{
          navigate('/manage inventoris')
    }
    return (
        <div className='all'>
          <Link to='/manageInventoris'><button onClick={handleProtect}>Manage Inventoris</button></Link> 
        </div>
    );
};

export default ProductDetail;