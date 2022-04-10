import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword,user} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Signup = () => { 
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
    const[error,setError] = useState('');
    const navigate = useNavigate();
    const[createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
   
    const handleEmailBlur = event =>{
       setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
     }
     const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
     }
     if(user){
         navigate('/shop');
     }
     const handleCreateUser = event =>{
             event.preventDefault();
             console.log('email:',email);
             console.log('password:',password);
             console.log('confirmPassword:',confirmPassword);
             if(password!==confirmPassword){
                 setError('password does not matched');
                 return;
             }
             createUserWithEmailAndPassword(email,password)
             .then(res =>{
              const user = res.user;
              console.log(user);
             });
            //  else{
            //     createUserWithEmailAndPassword(email,password)
            //     .then(result =>{
            //         const user = result.user;
            //         console.log(user);

            //     });
            //     setError(' ');
            //  }
     }
    return (
        <div className='form-container'>
            <div>
            <h1 className='form-title'>Sign Up</h1>
            <form  onSubmit={handleCreateUser}>
            <div className="input-group-style">
                <label htmlFor="email">Email</label>
                <input onBlur={ handleEmailBlur } type="email" name='email' id=" " required/>
            </div>
            <div className="input-group-style">
                <label htmlFor="password">Password</label>
                <input onBlur={ handlePasswordBlur} type="password" name='password' id=" " required/>
            </div>
            <div className="input-group-style">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur } type="password" name='password' id=" " required/>
            </div>
            <p style={{color:"red",marginLeft:"20px"}}>{error }</p>
            <input type="submit" value="Login" className='form-submit' />
           
            </form>
            <p className="p">Already have an account?<Link className='link' to="/login">Login</Link></p>
            </div>
           
             
        </div>
    );
};

export default Signup;