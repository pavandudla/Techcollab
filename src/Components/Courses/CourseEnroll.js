import React,{ useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import star_rating from '../../images/star.svg';
import course_img from '../../images/courses1.jpg'
import '../../css/CourseEnroll.css';
import { useNavigate } from 'react-router-dom';

const CourseEnroll = ()=>{

    const params = useParams();
    // console.log('params.courseName',params.courseName)
    const navigate = useNavigate();
    const [apiResponse,setApiResponse] = useState('');
    const [courseData,setCourseData] = useState('');

    
    
    useEffect(()=>{
      async function getCourseDetails(){
          console.log('in getCourseDetails method')
          await axios.get('http://127.0.0.1:8000/Course/'+params.courseName).then((res)=>(setCourseData(res.data)))
          console.log('courseData',courseData)
      }
      getCourseDetails();
    },[])

    async function buy_course(){
      let token = localStorage.getItem('access token');
      let config_data = {
        headers:{
          Authorization: 'Bearer ' + token
        }
      }
      let enroll_course_details = {
          "course":params.courseName,
          "course_status": "NOT YET STARTED",
          'payment_method':'UPI'
      } 
      await axios.post('http://127.0.0.1:8000/buy_course/',enroll_course_details,config_data)
      .then((res)=>{
        console.log(res.data)
        res.data.success?navigate('/MyCourses'):setApiResponse(res.data.error.message)
      })
    }
    return(
      <>
      {/* description:"popular backend framework" id:1 name:"Django" price:100 rating:"5.0" students_enrolled:50 thumbnail_image: null video: null */}
        <div className='course_enroll_course_payment_details'>
          <h2>Order Summary</h2>
          {apiResponse!==undefined?
            <div>
              <h1 className='error_div'>{apiResponse}</h1>
            </div>
            :''}
          <div className='course_details_course_enroll'>
            <img src={course_img} alt='course_img'/>
            <div className='course_enroll_course_details'>
              <p className='course_name'>{courseData.name}</p>
              <p className='course_price'>&#8377;{courseData.price}</p>
            </div>
            <div className='estimated_tax'>
              <p>Est. Tax - 18%(India)</p>
              <p>&#8377; {courseData.price}</p>
            </div>
            <div className='total_amount'>
              <p>Total Amount</p>
              <p>&#8377; {courseData.price}</p>
            </div>
            <button style={{'fontWeight':'bold', 'fontSize':'18px', 'width':'100%'}} onClick={()=>{buy_course()}}>Buy Now</button>
          </div>
        </div>
        
      </>
      
    )
}

export default CourseEnroll;