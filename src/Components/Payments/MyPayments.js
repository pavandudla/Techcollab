import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import '../../css/MyPayments.css'

const MyPayments = ()=>{

    const [userPayments, setUserPayments] = useState([])

    useEffect(()=>{
        console.log('in useEffect')
        let token = localStorage.getItem('access token')
        async function getUserEnrolledCourses(){
            let config = {
                headers:{
                    Authorization: 'Bearer '+token
                }
            }
            await axios.get('http://127.0.0.1:8000/MyPayments/<student_id>/student_payments/',config)
            .then((res)=>(setUserPayments(res.data)))
            .catch((error)=>(console.log(error)))
        }
        getUserEnrolledCourses();
    },[])
    console.log('userPayments',userPayments)

    return(
        // {id: 4, amount: 1000, status: 'Success', payment_method: 'Debit Card', created_at: '2023-04-01T11:00:11.655312Z'}
        <>
            <h1>Your Payments</h1>
            <div className='payments'>
                {userPayments.map((payment)=>{
                    return <div className='payment'>
                                <p>{payment.payment_id.amount}</p>
                                <p>{payment.payment_id.payment_method}</p>
                                <p>{payment.payment_id.status}</p>
                                <p>{payment.payment_id.created_at}</p>
                            </div>
                    
                })}
            </div>
        </>
    )
}

export default MyPayments;