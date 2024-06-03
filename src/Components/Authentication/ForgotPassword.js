import React, { useState } from "react";
import axios from 'axios';
import  '../../css/Authentication/ForgotPassword.css';

const ForgotPassword=()=>{
    const [Email,setEmail]=useState("");
    const [Emailerror,setEmailError]=useState(false);
    const [Msg,setMsg]=useState('');
    const [EmailResponseError,setEmailResponseError]=useState(false);

   
    

  const Emailfunction= (e)=>{
        e.preventDefault();
         //let token = localStorage.getItem('access token')
        if(Email=="")
        {
            setEmailError(true);
        }
        
        else{
            let configData= 
            {
                headers:
                {
                    'Content-type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem('access token')
                }
            }
            let emailData = {email:Email}
             axios.post('http://127.0.0.1:8000/forgot_password/',emailData, configData).then((response)=>{
                 console.log(response.data)
                console.log('response.data.success!==undefined',response.data.success==undefined)
                 if(response.data.success!==undefined){
                    console.log(response.data.success.message)
                    setMsg(response.data.success.message)
                 }
                 else if(response.data.error!==undefined){
                 {
                   
                        setEmailResponseError(true);
                 }  
                 }
                
                 
                
            }
            )
        }
        }
    
        console.log("email :",Email);

    return(
        <div className="forgotpassword_mainWrapper">
            <div className="forgotpassword_Content">
                <div className="Password_Recovery">
                    <h1>Password Recovery</h1>
                    {/* <h1>{Msg}</h1> */}
                    <div className="passwordRecoveryDiscriptionBelow">Recovery your password by providing your 
                        <div className="passwordRecoveryDiscriptionBelow1">account email below.</div>
                    </div>
                    <form onSubmit={Emailfunction}>
                    {EmailResponseError?<label className='error'>Sorry,unrecognized your email</label>:""} 
                        <div className="input_and_error">
                            <div className="EmailLabeldiv">
                                {/* <label>Email</label><br></br> */}
                                <input type="text" placeholder="Email" onChange={e=>{setEmail(e.target.value)}}/><br></br>
                            
                            </div>
                            <div className="TernaryError">
                                {Emailerror&&Email.length<=0?<label className="error">Email is required</label>:""}
                            </div>
                            {/* <div className="TernaryError">
                                {<label className="error">Sorry,unrecognized your email</label>:""}
                            </div> */}
                        </div>
                        <button type="submit">Send email</button>
                    </form>
                </div>
            </div>
        </div>
       
    )
}
export default ForgotPassword;
// =======
// <<<<<<<< HEAD:frontend/src/Components/Authentication/ForgotPassword.js
// import React, { useState } from "react";
// import '../../css/ForgotPassword.css';
// import axios from "axios";
// ========
// // import React, { useState } from "react";
// // import '../css/ForgotPassword.css'
// // import axios from "axios";
// >>>>>>>> 8d5896d1728d8fc4afdb678c829e72e460c806b6:frontend/src/Components/ForgotPassword.js

// // const ForgotPassword = ()=>{

// <<<<<<<< HEAD:frontend/src/Components/Authentication/ForgotPassword.js
//     const [ email,setEmail ] = useState('');
//     const [ msg,setMsg ] = useState('');
//     const [resetLink, setResetLink] = useState('')
// ========
// //     const [ email,setEmail ] = useState('');
// //     const [ msg,setMsg ] = useState('');
// >>>>>>>> 8d5896d1728d8fc4afdb678c829e72e460c806b6:frontend/src/Components/ForgotPassword.js

// //     function handleChange(e){
// //         e.preventDefault();
// //         setEmail(e.target.value)
// //     }
// //     async function handleSubmit(e){
// //         e.preventDefault();
// //         let token = localStorage.getItem('access token')

// <<<<<<<< HEAD:frontend/src/Components/Authentication/ForgotPassword.js
//         let configData = {
//             headers: {
//             Authorization: 'Bearer ' + token //the token is a variable which holds the token
//           }}
//         let emailData = {'email':email}
//         await axios.post('http://127.0.0.1:8000/forgot_password/',emailData, configData).then((res)=>
//             {
//                 console.log('res',res.data)
//                 console.log('res.data.success.message:',res.data.success.message)
//                 if(res.data.success!==undefined){
//                     console.log(res.data.success.message)
//                     setMsg(res.data.success.message)
//                     setResetLink(res.data.success.reset_link+res.data.success.token)
//                 }else{
//                     setMsg(res.data.error.message)
//                 }
//             }
//         )
//     }
//     console.log(resetLink)
//     console.log('email',email)
//     return (
//         <div>   
//             {/* <h1>{msg}</h1> */}
//             {resetLink.length!=0?<a href={resetLink} target='_blank'>
//                                     <button>Reset password</button>
//                                  </a>
//                                  :''}
//             <form className="forgotPasswordForm" onSubmit={handleSubmit}>
//                 <input  type='email' placeholder="Email" name='email' onChange={handleChange} value={email}/>
//                 <button className='forgotPasswordButton' type='submit'>Reset Password</button>
//             </form>
//         </div>
//     )
// }
// export default ForgotPassword;
// ========
//         let configData = {
//             headers: {
//             Authorization: 'Bearer ' + token //the token is a variable which holds the token
//           }}
//         let emailData = {'email':email}
//         await axios.post('http://127.0.0.1:8000/forgot_password/',emailData, configData).then((res)=>
//             {
//                 console.log('res',res.data)
//                 console.log('res.data.success.message:',res.data.success.message)
//                 if(res.data.success!==undefined){
//                     console.log(res.data.success.message)
//                     setMsg(res.data.success.message)
//                 }else{
//                     setMsg(res.data.error.message)
//                 }
//             }
//         )
//     }

//     console.log('email',email)
//     return (
//         <div>   
//             <h1>{msg}</h1>
//             <form className="forgotPasswordForm" onSubmit={handleSubmit}>
//                 <input  type='email' placeholder="Email" name='email' onChange={handleChange} value={email}/>
//                 <button className='forgotPasswordButton' type='submit'>Reset Password</button>
//             </form>
//         </div>
//     )
// }
// export default ForgotPassword;
