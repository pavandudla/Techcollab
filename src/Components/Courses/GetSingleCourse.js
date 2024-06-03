import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import star_rating from '../../images/star.svg';
import course1_img from '../../images/courses1.jpg';
import { Link } from 'react-router-dom';

export default function GetSingleCourse(){

    const [courseData, setCourseData] = useState({})

    const params = useParams();

    useEffect(()=>{
        async function fetchData(){
            // await axios.get(`http://127.0.0.1:8000/Course/${params.id}`).then((res)=>(setCourseData(res.data)))
            await axios.get('http://127.0.0.1:8000/Course/'+params.id).then((res)=>(setCourseData(res.data)))
        }
        fetchData()
    },[])
    console.log('getSingleCourse')
    console.log('res',courseData)
    return(
        <>
            {/* <SingleCourse course_name={courseData?.name} course_id={courseData?.id} course_rating={courseData?.rating} course_description={courseData.description}
                    course_video={courseData?.video} course_price={courseData?.price} course_students_enrolled={courseData?.students_enrolled} course_thumbnail_image={courseData?.thumbnail_image}/> */}
            <div className='single_course_div'>
            <div className='course_img'>
                <img src={course1_img} alt='course_image'/>
            </div>
            <div className='course_category_price'>
                <p className='tag'>Development</p>
                <p>${courseData?.price}</p>
            </div>
            <div className='course_name'>
                <p>{courseData?.name}</p>
            </div>
            <div className='course_no_of_lessons_students_enrolled'>
                <p>20 lessons</p>
                <p>{courseData?.students_enrolled} students</p>
            </div>
            <div className='rating'>
                <p>{courseData?.rating} <img src={star_rating} alt='rating emoji'/></p>
            </div>
            <Link to={'/courseEnroll/'+params.id}>
                <button>Enroll</button>
            </Link>
    </div>
        </>
    )
}