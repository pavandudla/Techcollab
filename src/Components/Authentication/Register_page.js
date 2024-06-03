import React from "react";
import { useState } from 'react';
import axios from 'axios';
import '../../css/Authentication/Register_page.css';
import { useNavigate } from "react-router-dom";


const Register_page=()=>
{
    const [RegEmail,setRegEmail]=useState("")
    const [username,setUsername]=useState("")
    const [RegPassword,setRegPassword]=useState("")
    // const [RegPassworderror,setRegPassworderror]=useState(false)
    const [RegConfirmPassword,setRegConfirmPassword]=useState("")
    // const [Notification,setNotification]=useState(false)
    const [Regerror,setRegError]=useState(false)
    const navigate = useNavigate();

    let register_data={email:RegEmail,password:RegPassword}
    console.log("firstname",register_data.firstName);

    let meta= 
    {
        headers:
        {
            'Content-type':'application/json',
            // 'Authorization':'Bearer '+localStorage.getItem('access token')
        }
    }
    const handleSubmitfunRegister=(e)=>
    {
            if(e)
            {
                e.preventDefault();
            }
            if(RegEmail.length==0||RegPassword.length==0)
            {
                setRegError(true);
            }
            else{
                axios.post('http://127.0.0.1:8000/Student/',register_data,meta).then((response)=>
                {
                    console.log('response:',response.data)
                   navigate('/Loginpage')
                })
            }
           
        
    }
    
    console.log(RegEmail);
    console.log(RegPassword);
    console.log(RegConfirmPassword);
    console.log(Regerror);
        
    
        return(
        <div className='Register_mainwrapper'>
        
            <div className='Register_wrapper'>

               <div className='form-box registration'>
                    <span className='icon-close'><ion-icon name="close"></ion-icon></span> 
                     <h2>Registration </h2>
                    <form  onSubmit={handleSubmitfunRegister}>
                        <div className='input-box'>
                            <span className='icon'><ion-icon name="person"></ion-icon></span>
                            <input type='text' placeholder="Username:" onChange={e=>setUsername(e.target.value)}/>
                            {/* <label>Username</label> */}
                        </div>
                        {Regerror&&username.length<=0?<label className='Reg_username_error'>Username can't be empty</label>:" "}
                        <div className='input-box'>
                            <span className='icon'><ion-icon name="mail"></ion-icon></span>
                            <input type='email' placeholder="Email:" onChange={e=>setRegEmail(e.target.value)} />
                            {/* <label>Email</label> */}
                        </div>
                        {Regerror&&RegEmail.length<=0?<label className='Reg_email_error'>Email can't be empty</label>:" "}
                        <div className='input-box'>
                            <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
                            <input type='password' placeholder="Password:" onChange={e=>setRegPassword(e.target.value)} />
                            {/* <label>Password</label> */}
                        </div>
                        {Regerror&&RegPassword.length<=0?<label className='Reg_password_error'>Password can't be empty</label>:" "}
                         {/* <label>password can't be empty</label>  */}
                         <div className='input-box'>
                            <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
                            <input type='password' placeholder="Confirm password:" onChange={e=>setRegConfirmPassword(e.target.value)} />
                            {/* <label>Password</label> */}
                        </div>
                        <div className="conform_error">
                            {Regerror&&RegConfirmPassword.length<=0?<label className='Reg_conformPassword_error'>Confirm password can't be empty</label>:" "}        
                        </div><br></br>
                       <div>
                        {RegPassword==RegConfirmPassword?" ":<label className='conformpassword_error'>Confirm password and Password must be same </label>}
                        </div>
                        <div className='remember-forgot'>
                            <label><input type='checkbox'/>I agree to the terms & conditions</label>

                        </div>
                        <button type='submit' className='loginbtn'>Register</button>
                        <div className='login-register'>
                            <p>Already have an account?<a href='/Loginpage' className='login-link'>Login</a></p>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
 

    )
    
    
}
export default Register_page;