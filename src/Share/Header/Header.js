import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
import icon from '../../image/icon2.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout =()=>{
        signOut(auth);
    }

    return (
        <div className='header-all'>
            <div className='header-img'>
               <img src={icon} alt=''></img>
            </div>
            <div className='header-part'>
            <Link to="/">Home</Link> 
           <Link to="/blog">Blog</Link> 
           {user ? 
           <button onClick={handleSignout}>signout</button> 
           :
           <Link to="/login">Login</Link>
           
        }
            
          
            </div>
           
        </div>
        
    );
};

export default Header;