import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'
import Social from './Social/Social';
import Loading from '../../Share/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }

    if(user){
        navigate(from, {repalce: true});
    }
    if(user){
      return <Loading></Loading>
    }
    
   
    const handleLogin = event => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event =>{
      navigate('/Register');
  }
    return (
        <div className='login-form'>
            <h2>Please Login</h2>
            <form onSubmit={handleLogin} className='login-manage'>
                <input type="email" name="email" id="" placeholder='Enter your email'  />
                <input type="password" name="password" id=""
                placeholder='Enter your password'  />
                <input type="submit" value="Login" />
            </form>
            <h4 className='login-tost-all'>New to wirehouse ? <Link to='/Register' onClick={navigateRegister} className='login-tost' >Plz Register</Link></h4>
            <Social></Social>
            </div>
            
    );
};

export default Login;