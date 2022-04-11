
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const[email,setEmail] = useState('');
    const[name,setName] = useState('');
    const[adress,setAdress] = useState('');
    const[phone,setPhone] = useState('');
    const[error,setError] = useState('');
    //const navigate = useNavigate();
    

    const handleNameBlur = event =>{
       setName(event.target.value);
     
    }
    const handleAdressBlur = event =>{
        setAdress(event.target.value);
     }
     const handlePhoneNumberBlur = event =>{
        setPhone(event.target.value);
     }
    //  if(user){
    //      navigate('/shop');
    //  }
     const handleCreateUser = event =>{
             event.preventDefault();
            const shipping ={phone,email,name,adress};
            console.log(shipping);
            }
    return (
        <div className='form-container'>
            <div>
            <h1 className='form-title'>Shipment</h1>
            <form  onSubmit={handleCreateUser}>
           
            <div className="input-group-style">
                <label htmlFor="name">Name</label>
                <input onBlur={ handleNameBlur  } type="text" name='name' id=" " required/>
            </div>
            <div className="input-group-style">
                <label htmlFor="email">Email</label>
                <input value={ user.email}  readOnly type="email" name='email' id=" " required disabled/>
            </div>
            <div className="input-group-style">
                <label htmlFor="adress">Adress</label>
                <input onBlur={ handleAdressBlur} type="text" name='adress' id=" " required/>
            </div>
            <div className="input-group-style">
                <label htmlFor="phonenumber">Phone Number</label>
                <input onBlur={ handlePhoneNumberBlur } type="tel" name='phonenumber' id=" " required />
            </div>
            <p style={{color:"red",marginLeft:"20px"}}>{error }</p>
            <input type="submit" value="Login" className='form-submit' />
           
            </form>
            </div>
           
             
        </div>
    );
};

export default Shipment;