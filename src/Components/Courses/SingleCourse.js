import React,{ useEffect, useState } from 'react'
import course1_img from '../../images/courses1.jpg';
import '../../css/Homepage/SingleCourse.css';
import star_rating from '../../images/star.svg';
import { Link } from 'react-router-dom'; 
import person_logo from '../../images/singleCourse/person-square-svgrepo-com.svg';
import lesson_icon from '../../images/singleCourse/notes-note-svgrepo-com.svg';
import StarRating from '../StarRating';

export default function SingleCourse(props){
    console.log('single course')
  return (
    <div className='single_course_div'>
        <Link to={'/getSingleCourse/'+props.course_id} style={{ textDecoration: 'none',color:'black' }}>
            <div className='course_img'>
                <img src={course1_img} alt='course image'/>
            </div>
            <div className='course_details'>
                <div className='course_category_price'>
                    <p className='tag'>Development</p>
                    <p className='course_price'>&#8377;{props.course_price}</p>
                </div>
                <div className='course_name'>
                    <p>{props.course_name}</p>
                </div>
                <div className='course_no_of_lessons_students_enrolled'>
                <p className='lesson_icon_no_of_lessons'>
                        <img className='lesson_icon' src={lesson_icon} alt='lesson_icon'/>
                        <span>20 lessons</span>
                    </p>
                    <p className='person_logo_students_enrolled'>
                        <img className='person_logo' src={person_logo} alt='person_logo'/>
                        <span>{props.course_students_enrolled} students</span>
                    </p>
                </div>
                <div className='rating'>
                    {/* <p>{props.course_rating} <img src={star_rating} alt='rating emoji'/></p> */}
                    <span>{props.course_rating}</span> 
                    <StarRating rating={props.course_rating} />
                </div>
            </div>
            
        </Link>
        
    </div>
  )
}
