import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword,user,error] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
     }
     const handlePasswordBlur = event =>{
         setPassword(event.target.value);
      }
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';
      if(user){
        navigate(from,{replace:true});
    }
     const handleUserSignIn = event =>{
        event.preventDefault();
        signInWithEmailAndPassword( email,password)
      }

    return (
        <div className='form-container'>
            <div>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleUserSignIn}>
            <div className="input-group-style">
                <label htmlFor="email">Email</label>
                <input  onBlur={ handleEmailBlur }  type="email" name='email' id=" " required/>
            </div>
            <div className="input-group-style">
                <label htmlFor="password">Password</label>
                <input  onBlur={ handlePasswordBlur} type="password" name='password' id=" " required/>
            </div> 
            <p style={{color:"red",marginLeft:"20px"}}>{error?.message }</p>
            <input  type="submit" value="Login" className='form-submit' />
           
            </form>
            <p className="p">New to Ema John?<Link className='link' to="/signup">Create an account</Link></p>
            </div>
           
             
        </div>
    );
};

export default Login;