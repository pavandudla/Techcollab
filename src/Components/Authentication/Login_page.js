// import {useform} from 'react-hook-form';
import { useState,useEffect } from 'react';
import React from 'react';
import '../../css/Authentication/Loginpage.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";





const Loginpage=()=>
{
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const [loginError,setLoginError] = useState(false)
    const navigate=useNavigate()
   
    let config= 
    {
        headers:
        {
            'Content-type':'application/json',
            // 'Authorization':'Bearer '+localStorage.getItem('access token')
        }
    }
    let login_data={username:Email,password:Password} 
   
    const handleSubmitLogin=(e)=>
    {
        if(e)
        {
            e.preventDefault();
        }

        if(Email.length==0||Password.length==0)
        {
            setError(true);
        }
        else{
            axios.post('http://127.0.0.1:8000/login',login_data, config)
            .then((response)=>{
                 console.log(response.data)
                console.log('response.data.success!==undefined',response.data.success==undefined)
                 if(response.data.success!==undefined){
                    localStorage.setItem('access token',response.data.access);
                    localStorage.setItem('refresh token',response.data.refresh);
                    navigate('/allCourses')
                 }
                 else if(response.data.error!==undefined){
                 {
                   
                        setLoginError(true);
                 }  
                 }
                
                 
                 
            }
            )
        }
    }

    console.log(Email);
    console.log(Password);
    console.log(error);
   
   
     return(
            
        <div className='mainwrapper'>
        
            <div className='wrapper'>
                <span className='icon-close'><ion-icon name="close"></ion-icon></span>
                <div className='form-box login'>
                    <form onSubmit={handleSubmitLogin}>
                    <h2>Login to your account</h2>
                    {loginError?<label className='error'>Email or Password is incorrect </label>:""} 
                        <div className='input-box'>
                            <span className='icon'><ion-icon name="mail"></ion-icon></span>
                            <input type='email' placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        {error&&Email.length<=0?<label className='loginEmail_error'>Email can't be empty</label>:" "}
                        <div className='input-box'>
                            <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
                            <input type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
                           
                        </div>
                        {error&&Password.length<=0?<label className='loginPassword_error'>Password can't be empty</label>:" "}
                        
                        <div className='remember-forgot'>
                            <label><input type='checkbox' />Remember me</label>
                            <Link to='/ForgotPassword'>Forget Password?</Link>
                        </div>
                        <button type='submit' className='loginbtn'>Login</button>
                        <div className='login-register'>
                            <p>Don't have an account?<a href='/Register_page' className='register-link'>Register</a></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        )
}
export default Loginpage;

