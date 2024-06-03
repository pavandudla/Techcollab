import React, { useState,useEffect } from 'react'
import SingleCourse from './SingleCourse'
import '../../css/Homepage/AllCourses.css'
import axios from 'axios';

export default function AllCourses() {

    const [allCourses,setAllCourses] = useState([])
    const [search,setSearch] = useState('')
    const [filteredCourses,setFilteredCourses] = useState([])
    // const [totalPages, setTotalPages] = useState(0)
    const [totalNumberOfCourses, setTotalNumberOfCourses] = useState(0)
    const [numberOfCoursesPerPage, setNumberOfCoursesPerPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalNumberOfCourses / numberOfCoursesPerPage);

  async function handleClick(pageNum){
    setCurrentPage(pageNum);
    console.log('pageNum',pageNum)
    await axios.get(`http://127.0.0.1:8000/Course/?p=${pageNum}`)
        .then((res)=>{
            console.log('all courses',res.data)
            console.log('all courses result',res.data.results)
            setAllCourses(res.data.results);
            setFilteredCourses(res.data.results);
        })
    }

  

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }



    // function handleSearch(e){
    //     setSearch(e.target.value)
    // }

    console.log('search',search)
    // async function getAllCourses(){
    //     console.log('in useEffect')
    //     let options = {
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     }
    //    await fetch('http://127.0.0.1:8000/Course',options).then((response)=>{response.json()})
    //    .then((data)=>{
    //         console.log('data',data)
    //         setAllCourses(data)
    //     }) 
    //    console.log('allcourses',allCourses)
    // }

    useEffect( ()=>{
        // using fetch
        // const fetchData =  async () => {
        //     console.log('in useEffect')
        //     let options = {
        //         method:'GET',
        //     headers:{
        //             'Content-type':'application/json',
        //             },
        //     }
        //    await fetch('http://127.0.0.1:8000/Course/',options).then((response)=>{response.json()})
        //    .then((data)=>{
        //         console.log('data',data)
        //         setAllCourses(data)
        //     }) 
        // }
        // fetchData()
        // using axios
        // console.log('axios')
        async function get_data(){
            await axios.get('http://127.0.0.1:8000/Course').then((res)=>{
            console.log('all courses',res.data)
            console.log('all courses result',res.data.results)
            setAllCourses(res.data.results);
            setFilteredCourses(res.data.results);
            setNumberOfCoursesPerPage(res.data.results.length)
            setTotalNumberOfCourses(res.data.count)
            })
        }
        get_data();
    },[])

    console.log('allcourses',allCourses)
    console.log('totalPages',totalPages)
    console.log('totalNumberOfCourses',totalNumberOfCourses)
    console.log('numberOfCoursesPerPage',numberOfCoursesPerPage)

    const filterCourses = (searchTerm,allCourses)=>{
        return(
            // console.log('searchTerm',searchTerm,'allCourses',allCourses)
            allCourses.filter((course)=>{
                // course.name.toLowerCase().includes(searchTerm.toLowerCase())
                console.log(course.name.toLowerCase())
                return('filtering',course.name.toLowerCase().includes(searchTerm.toLowerCase()))
            })
        )
    }
    console.log('filtered courses',filteredCourses)
  return (
    <div className='all-courses-main'>
        <input type='search' placeholder='search courses' onChange={(e)=>{setSearch(e.target.value)}}  value={search} />
        <button id='search_btn' onClick={()=>{setFilteredCourses(filterCourses(search,allCourses))}}>Search</button>
        <div className='all_courses'>

            {filteredCourses.map((course) => {
                return <SingleCourse key={course.id} course_name={course.name} course_id={course.id} course_rating={course.rating} course_description={course.description}
                        course_video={course.video} course_price={course.price} course_students_enrolled={course.students_enrolled} course_thumbnail_image={course.thumbnail_image}/>
                })
            }
        </div>
        <div className='all_courses_pagination'>
             {pageNumbers.map((pageNum) => (
        <button className='pagination_btn' key={pageNum} onClick={() => handleClick(pageNum)}>
          {pageNum}
        </button>
      ))}
        </div>
    </div>
  )
}
