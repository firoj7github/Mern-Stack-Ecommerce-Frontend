import React from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Share/Loading/Loading';



const Register = () => {
  

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

  const navigate =useNavigate();
  if(user){
    navigate('/');
  }
  if(loading){
    return <Loading></Loading>
  }
  const handleFirebase = async(event) =>{
   event.preventDefault();
  
   const email = event.target.email.value;
   const password = event.target.password.value;
   console.log(email, password);
   
   await createUserWithEmailAndPassword(email,password);
  }
    return (
        
          
            <div className='login-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleFirebase} className='login-manage'>
                <input type="email" name="email" id="" placeholder='Enter your email'  />
                <input type="password" name="password" id=""
                placeholder='Enter your password'  />
                <input  type="submit" value="Register" />
            </form>
           <h4>Already have an account? <Link to='/Login' className='text-danger pe-auto text-decoration-none' >Plz Login</Link></h4>  
        </div>

    );
};

export default Register;