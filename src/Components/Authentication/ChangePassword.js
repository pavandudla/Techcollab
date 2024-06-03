import React,{ useState } from "react";
import axios from 'axios';
import '../../css/Authentication/Change_password.css';
import { useNavigate } from "react-router-dom";


const ChangePassword = ()=>{

    const [ CurrentPassword, setCurrentPassword ] = useState("");
    const [ NewPassword, setNewPassword ] = useState('');
    const [ ConfirmNewPassword, setConfirmNewPassword ] = useState('');
    const [ChangePasswordError, setChangePasswordError]=useState(false);
    const [Msg,setMsg]=useState(false);
    const navigate=useNavigate()

    let [formData, setFormData] = useState({current_password:'',new_password:'',confirm_new_password:''})

    function handleChange(e){
        const {name,value} = e.target;
        setFormData((prevData)=>{
            return(
                {
                ...prevData,
                [name]:value
                }
            )

        })
    }

    console.log('formData',formData)
   

    function handleSubmit(e)
    {
        
            
                e.preventDefault();
            
        if(CurrentPassword.length==0||NewPassword.length==0||ConfirmNewPassword.length==0)
        {
            setChangePasswordError(true)
        }
        else{
            let jwt_token = localStorage.getItem('access token')
            let configData = {
                headers:{
                    Authorization:`Bearer ${jwt_token}` 
                }
            }
            console.log('in handleSubmit')
            axios.post('http://127.0.0.1:8000/change_password/',formData,configData)
            .then((res)=>{console.log(res.data)
            if(res.data.success!==undefined){
                navigate('/allCourses')
             }
            })
            // .catch((error)=>{console.log(error)})
        }
        
    }
    console.log("currentpassword:",CurrentPassword);
    console.log("Newpassword:",NewPassword);
    console.log("conform newpassword:",ConfirmNewPassword);
    return(
        <div className="Changepassword_mainWrapper">   
            <h1>{Msg}</h1> 
            <form className="ChangePasswordForm" onSubmit={handleSubmit}>
                <h1>Change Password</h1>
                <div className="EmailLabeldiv">
                    <input  type='password' placeholder="Current Password" name='current_password' onChange={e=>setCurrentPassword(e.target.value)} />
                </div>
                <div className="ternary_error">
                        {ChangePasswordError&&CurrentPassword.length<=0?<label className="error">current password can't be empty</label>:""}
                </div>
               <div className="EmailLabeldiv">
                    <input  type='password' placeholder="New Password" name='new_password' onChange={e=>setNewPassword(e.target.value)} />
               </div>
               <div className="ternary_error">
                        {ChangePasswordError&&NewPassword.length<=0?<label className="error">New password can't be empty</label>:""}
                </div>
                <div className="EmailLabeldiv">
                    <input  type='password' placeholder="Confirm New Password" name='confirm_new_password' onChange={e=>setConfirmNewPassword(e.target.value) } />
                </div>
                <div className="ternary_error">
                        {ChangePasswordError&&ConfirmNewPassword.length<=0?<label className="error">Confirm new password can't be empty</label>:""}
                </div><br></br>
                <div className="ternary_error">
                        {NewPassword==ConfirmNewPassword?" ":<label className="error">Confirm new password is not matching</label>}
                </div>
                <button className='forgotPasswordButton' type='submit'>Change Password</button>
            </form>
        </div>
    )
}

export default ChangePassword;