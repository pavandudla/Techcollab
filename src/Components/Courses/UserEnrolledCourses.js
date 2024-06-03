import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import SingleCourse from './SingleCourse';
import '../../css/UserEnrolledCourses.css';

const EnrolledCourses = ()=>{

    const [userEnrolledCourses, setUserEnrolledCourses] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([])
    const [searchTerm,setSearchTerm] = useState([])

    useEffect(()=>{
        console.log('in useEffect')
        let token = localStorage.getItem('access token')
        async function getUserEnrolledCourses(){
            let config = {
                headers:{
                    Authorization: 'Bearer '+token
                }
            }
            await axios.get('http://127.0.0.1:8000/MyCourses/<student_id>/student_courses/',config)
            .then((res)=>{
                            setUserEnrolledCourses(res.data)
                            setFilteredCourses(res.data)
                        })
            .catch((error)=>(console.log(error)))
        }
        getUserEnrolledCourses();
    },[])
    console.log('userEnrolledCourses',userEnrolledCourses)
    console.log('filteredCourses',filteredCourses)
    console.log('search term',searchTerm)

    
    function filterCourses(searchTerm,filteredCourses){
        return userEnrolledCourses.filter((course)=>{return course.course.name.toLowerCase().includes(searchTerm.toLowerCase())})
        // return filteredCourses.filter((course)=>{console.log('course.name',course.course.name.)})
    }
    return(
        <div className='my_course_mainwrap'>
            <h1>User Enrolled Courses</h1>
            <input type='search' placeholder='search' onChange={(e)=>{setSearchTerm(e.target.value)}}  value={searchTerm} />
            <button id='search_btn' onClick={()=>{setFilteredCourses(filterCourses(searchTerm,filteredCourses))}}>Search</button>
            <div className='courses_display'>
            {filteredCourses.map((course)=>{
                return <SingleCourse course_name={course.course.name} course_id={course.course.id} course_rating={course.course.rating} course_description={course.course.description}
                    course_video={course.course.video} course_price={course.course.price} course_students_enrolled={course.course.students_enrolled} course_thumbnail_image={course.course.thumbnail_image}/>})}
            </div>
            
        </div>
    )
}

export default EnrolledCourses;