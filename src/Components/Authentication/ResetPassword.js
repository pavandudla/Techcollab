import React,{ useState } from "react";
import axios from 'axios';
import '../../css/Authentication/Reset_password.css'
import { useParams } from "react-router-dom";

const ResetPassword = ()=>{

    const [ password,setPassword ] = useState('');
    const [ confirmPassword,setConfirmPassword ] = useState('');
    const [ResetPasswordError,setResetPasswordError ]=useState(false);
    const [ msg,setMsg ] = useState('');
    const param = useParams();
    const password_reset_token = param.reset_password_token_from_url


    function handleChange(e){
        e.preventDefault();
        setPassword(e.target.value)
    }

    function handleConfirmPassword(e){
        e.preventDefault();
        setConfirmPassword(e.target.value)
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        if(password.length==0||confirmPassword.length==0)
        {
            setResetPasswordError(true);
        }
        else
        {
            let token = localStorage.getItem('access token')

            let configData = {
                headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
              }}
            let password_reset_data = {'password':password}
            await axios.post(`http://127.0.0.1:8000/reset_password/${password_reset_token}`,password_reset_data, configData).then((res)=>
                {
                    console.log('res',res.data)
                    console.log('res.data.success.message:',res.data.success.message)
                    if(res.data.success!==undefined){
                        console.log(res.data.success.message)
                        setMsg(res.data.success.message)
                    }else{
                        setMsg(res.data.error.message)
                    }
                }
            )
        }
        
    }

    // console.log('param',password_reset_token);
    console.log("new password",password);
    console.log("confirm newpassword",confirmPassword);

    return(
        <div className="Resetpassword_mainWrapper">   
            <h1>{msg}</h1>
            <form className="ResetPasswordForm" onSubmit={handleSubmit}>
                <h1>Reset Password</h1>
                <h5>Set strong passwords include numbers,<br></br>
                <span>letters,and punctuation marks.</span></h5>
                <div className="EmailLabeldiv">
                    <input  type='password' placeholder="New password" name='password' onChange={handleChange} value={password}/>
                </div>
                <div className="Resetternary_error">
                    {ResetPasswordError&&password.length==0?<label className="Reset_newpassword_error">New password can't be empty</label>:" "}
                </div>
                <div className="EmailLabeldiv">
                    <input  type='password' placeholder="Confirm new password" name='confirm_password' onChange={handleConfirmPassword} value={confirmPassword}/><br></br>
                </div>
                <div className="Resetternary_error">
                    {ResetPasswordError&&confirmPassword.length==0?<label className="Reseterror">Confirm newpassword can't be empty</label>:" "}
                </div><br></br>
                <div className="Resetternary_error">
                    {password==confirmPassword?" ":<label className="Reseterror">Confirm newpassword is not matching</label>}
                </div>
                <button type='submit'>Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword;