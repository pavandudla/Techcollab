import React, { useEffect, useState } from 'react';
import logo from './image2vector.svg'
import '../../css/Homepage/Header2.css'
import { Link } from 'react-router-dom';
const Header=(props)=>
{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    
    useEffect(()=>{
        if(localStorage.getItem('access token')!==null)
        {

            setIsLoggedIn(true);
        }
        console.log("localitem",localStorage.getItem('access token'));
    },[isLoggedIn])

    
    return(
       
        <div className="menu">
            
            
            <div className='logo'>
            <Link to='/'><img src={logo} /></Link> 
            </div>
            <nav className='lists'>
                 {isLoggedIn?  
                        <>
                        <Link to='/'>Home</Link>
                        {/* <Link to='/MyCourses'>Mycourses</Link> */}
                        <Link to='/allCourses'>Courses+</Link>
                        <Link to='ForgotPassword'>Forgotpassword</Link>
                        <Link to='/reset_password/:reset_password_token_from_url'>Reset Password</Link>
                        <ul className='profile_details'>
                            <li><Link to="#" className='register_link'> My Profile <i className='fas fa-caret-down'></i></Link> 
                                 <div className='dropdown_menu'>
                                    <ul className='profile_details_of_mycourse'>
                                    
                                        <li className='profile_mycourses'><Link to='/MyCourses'>MY COURSES</Link></li>
                                        <li className='profile_changepassword'><Link to='/change_password/'>CHANGE PASSWORD</Link> </li>
                                        <li className='profile_signout'>SIGN-OUT</li>
                                    
                                     </ul> 
                                </div>
                                     
                            </li>
                        </ul>

                        </>
                        : 
                        <>
                         <Link to='/'>Home</Link>
                        {/* <Link to='/MyCourses'>Mycourses</Link> */}
                        <Link to='/allCourses'>Courses+</Link>
                        {/* <Link to='ForgotPassword'>Forgotpassword</Link> */}
                        <Link to='/reset_password/:reset_password_token_from_url'>Reset Password</Link> 
                        {/* <Link to='/change_password/'>Change Password</Link>           */}
                        <Link to='/Loginpage' className='login_link'>Login</Link>
                        <Link to='/Register_page' className='register_link'>Register</Link>
                        </>
                }
                      

            </nav>
        </div>
    )
}

export default Header;