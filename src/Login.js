import React, { Fragment, useState } from 'react';
import axios from 'axios';
function Login(){

    const[name, setName] = useState('');
    const[phoneno, setPhoneNo] = useState('');

    const handleNameChange =(value) => {
        setName(value);
    };

    const handlePhoneNoChange =(value) => {
        setPhoneNo(value);
    };

    const handleLogin = () => {
        const data = {
            Name : name,
            PhoneNo : phoneno,
            
        };
        
    
    const url = 'https://localhost:44348/api/Test/Login';
        axios.post(url,data).then((result) =>{
            alert(result.data);
        }).catch((error)=>{
            alert(error);
        })

    }

    return(
        <Fragment>
        <label>Name</label>
        <input type="text" id="txtName" placeholder='Enter Name' onChange={(e) => handleNameChange(e.target.value)} /><br></br>
        <label>Phone No</label>
        <input type="text" id="txtPhoneNo" placeholder='Enter Phone No' onChange={(e) => handlePhoneNoChange(e.target.value)} /><br></br>
        <br></br>
        <button onClick={() => handleLogin()}>Login</button>
        </Fragment>
    )
}

export default Login;