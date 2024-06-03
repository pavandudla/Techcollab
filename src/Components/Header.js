import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [isAuthenticated,setIsAuthenticated] = useState(false)

    useEffect(()=>{
        if (localStorage.getItem('access token')!==null){setIsAuthenticated(true)}
    },[isAuthenticated])

    return(
        <div>
            <ul style={{listStyleType:'none',display:'flex',gap:'20px'}}>
                <li>
                    <Link to="/">Home</Link>
                    
                </li>
                <li>
                    <Link to="/AllCourses">AllCourses</Link>
                </li>
                {isAuthenticated ?
                    <>
                        <li><Link to="">Logout</Link></li>
                        <li><Link to='/MyCourses'>myCourses</Link></li>
                        <li><Link to='/MyPayments'>myPayments</Link></li>
                        <li><Link to='/forgot_password'>Forgot Password</Link></li>
                        <li><Link to='/change_password/'>Change Password</Link></li>
                        <li><Link to="/login">login</Link></li>
                        <li><Link to="/register">register</Link></li>
                    </>
                    :
                    <></>
                    
                }
                
            </ul>
        </div>
    )
}

export default Header;