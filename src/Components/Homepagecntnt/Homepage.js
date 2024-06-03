import React from 'react';
import '../../css/Homepage/Homepage.css';
import videoimg from './videoimg.jpg';
import eyeimg from './eye.png';
// import moshimg from './mosh.png';
import circlecourseimg from './circlecourses.png';
import togglecolor from './togglecolorimg.png';
import contactimg from './contactimg.png';
import allacess from './allaccess-subscription.jpeg';
import pythonimg from './pythonimg.png';
import reactimg from './reactimg.png';
import Cplus from './c++img.png';
import html_cssimg from './html-cssimg.png';
import javascriptimg from './javascriptimg.png';
import thirtydaysimg from './30days.png';
// import babaiimg from'./babai_passportimg.png';
// import babaiimg from './babaiimgbgrmv.png';
import babaiimg from './babai_passport_bgrmv.png';
import moshvideo from './moshvideo.mp4';

const Homepage=()=>{

    return(
       <div id='Home'>
        <div className='homemain'>
            <div className='heading'>
                <h2>Become the Developer That <br></br>
                Companies Are Looking For</h2>
            </div>

             <div className='video'>
                <video controls  width="700px" height="395px" >
                    <source src={moshvideo} type='video/mp4'></source>
                </video>
            </div>
            <div className='headerbelow'>
                <p> -- HELLO --</p>
                <div>I'm Ashok dhudla</div>
            </div>
            <div className='headerbelow1'>
                Are you feeling stuck or overwhelmed in your coding journey?Dont worry,I've<br></br>
                got your back!Together,we'll work to level up your skills,increase your earning<br></br>
                <span>potential, and build a brighter future.Lets make it happen!</span>
            </div>
            <div className='headerbelow2'>
                <div className='sub'>
                    <span className='headerbelow2sub1'>20+</span>
                    <p className='year'>Year of Experince</p>
                </div>
                <div className='sub'>
                    <span className='headerbelow2sub2'>10M+</span>
                    <p className='student'>Student Taught</p>
                </div>
                <div className='sub'>
                    <span className='headerbelow2sub3'>3M</span>
                    <p className='youtube'>Youtube Fans</p>
                </div>
                <div className='sub'>
                    <span className='headerbelow2sub4'>44</span>
                    <p className='coding'>Coding Courses</p>
                </div>

            </div>
            <div className='whycode'>
                   -- WHY CODE WITH ASHOK? --
            </div>
            <div className='master'>
                Master the Coding Skill Like a Pro
            </div>
{/* ------------------------------------ steps component ----------------------------------------------------------- */}
            <div className='main-master'>
                    <div className='master_coding_skills_steps'>
                        <div className='step1'>
                            <span id='step_by_step'>STEP-BY-STEP LESSONS<br></br></span>
                            <span className='biginner'>Beginner-Friendly and Easy to<br></br></span>
                            <span id='follow_id'>Follow<br></br></span>
                            <span className='mosh-student'>Mosh's students consistently have about his<br></br></span>
                            <span id='mosh-student1'>remarkable talent for simplifying complex</span> <br></br>
                            <span id='concept'>concepts into easy-to-digest lessons that can<br></br>
                            be understood by anyone. With Mosh's clear<br></br>
                            and concise approach, you can quickly learn<br></br></span>
                            <span id='And_apply'>and apply new tech skills, without getting <br></br></span>
                            <span id='bogged'>bogged down in long and poorly-structured <br></br></span>
                            <span id='courses_id'>courses.</span>
                        </div>

                        <div className='step1.2'>
                            <img src={videoimg} alt='display image ' width="300px" height="300px"/>
                        </div>
                    </div>
                    <div className='master_coding_skills_steps'>
                            <div id='step1'>
                                <img src={eyeimg} width="250px" height="250px"></img>
                            </div>
                            <div className='step1'>
                                <span>FAST-TRACK YOUR LEARNING<br></br></span>
                                <span className='biginner'>Right to the Point, No Fluff<br></br></span>
                                <span className='mosh-student'>Say goodbye to boring, repetitive lessons and <br></br>
                                say hello to Mosh's dynamic teaching style.<br></br>
                                He keeps his lessons concise and to-the<br></br>
                                -point, free from buzzwords and confusing<br></br>
                                jargon. You'll learn everything you need to<br></br>
                                know, explained in plain English and backed<br></br>
                                by real-world examples.</span>
                            </div>
                    </div>
            </div>
            <div className='master_coding_skills_steps'>

                    <div className='step1'>
                        <span>FAST-TRACK YOUR LEARNING<br></br></span>
                        <span className='biginner'>Right to the Point, No Fluff<br></br></span>
                        <span className='mosh-student'>Say goodbye to boring, repetitive lessons and <br></br>
                        say hello to Mosh's dynamic teaching style.<br></br>
                        He keeps his lessons concise and to-the<br></br>
                        -point, free from buzzwords and confusing<br></br>
                        jargon. You'll learn everything you need to<br></br>
                        know, explained in plain English and backed<br></br>
                        by real-world examples.</span>
                    </div>

                    <div className='step1_two'>
                        <img src={babaiimg} width="170px" height="170px"></img>
                    </div>
            </div>
            <div className='master_coding_skills_steps'>

                    <div className='step1.2'>
                        <img src={circlecourseimg} width="300px" height="300px"></img>
                    </div>
                    <div className='step1'>
                        <span>FAST-TRACK YOUR LEARNING<br></br></span>
                        <span className='biginner'>Right to the Point, No Fluff<br></br></span>
                        <span className='mosh-student'>Say goodbye to boring, repetitive lessons and <br></br>
                        say hello to Mosh's dynamic teaching style.<br></br>
                        He keeps his lessons concise and to-the<br></br>
                        -point, free from buzzwords and confusing<br></br>
                        jargon. You'll learn everything you need to<br></br>
                        know, explained in plain English and backed<br></br>
                        by real-world examples.</span>
                    </div>      
            </div>

            <div className='master_coding_skills_steps'>

                    <div className='step1'>
                        <span>FAST-TRACK YOUR LEARNING<br></br></span>
                        <span className='biginner'>Right to the Point, No Fluff<br></br></span>
                        <span className='mosh-student'>Say goodbye to boring, repetitive lessons and <br></br>
                        say hello to Mosh's dynamic teaching style.<br></br>
                        He keeps his lessons concise and to-the<br></br>
                        -point, free from buzzwords and confusing<br></br>
                        jargon. You'll learn everything you need to<br></br>
                        know, explained in plain English and backed<br></br>
                        by real-world examples.</span>
                    </div>

                    <div className='step1.2'>
                        <img src={togglecolor} width="300px" height="300px"></img>
                    </div>
            </div>

            <div className='master_coding_skills_steps'>

                    <div className='step1.2'>
                        <img src={contactimg} width="300px" height="300px"></img>
                    </div>
                    <div className='step1'>
                        <span>FAST-TRACK YOUR LEARNING<br></br></span>
                        <span className='biginner'>Right to the Point, No Fluff<br></br></span>
                        <span className='mosh-student'>Say goodbye to boring, repetitive lessons and <br></br>
                        say hello to Mosh's dynamic teaching style.<br></br>
                        He keeps his lessons concise and to-the<br></br>
                        -point, free from buzzwords and confusing<br></br>
                        jargon. You'll learn everything you need to<br></br>
                        know, explained in plain English and backed<br></br>
                        by real-world examples.</span>
                    </div>      
            </div>
{/* ----------------------------------------- courses component ----------------------------------------------------------------- */}
            <div className='allcourses_main'>
                
                        <div className='allcourses_submain'>
                            Top Selling Courses
                        </div>
                        <div className='allcourses'>
                            <div className='allaccess'>
                                <img className='course-box-allaccessimg' src={allacess} width='350px' height='200px'></img>
                                <div className='allcourses-down'>
                                    <div className='subscription'>
                                        All-Access subscription 
                                    </div>
                                    <div className='subscription-down'>
                                        Become the best coder you can be with <br></br>unlimited access to all the existing and....
                                    </div>
                                    <div className='bundels'>
                                        45 Course Bundle
                                    </div>
                                </div>
                            </div>
                            
                                
                            <div className='python'>
                                <img className='course-box-pythonimg' src={pythonimg} width='350px' height='200px'></img>
                                <div className='allcourses-down'>
                                    <div className='subscription'>
                                        All-Access subscription 
                                    </div>
                                    <div className='subscription-down'>
                                        Become the best coder you can be with <br></br>unlimited access to all the existing and....
                                    </div>
                                
                                </div>
                            </div>
                            <div className='react'>
                                <img className='course-box-reactimg' src={reactimg} width='350px' height='200px'></img>
                                <div className='allcourses-down'>
                                    <div className='subscription'>
                                        All-Access subscription 
                                    </div>
                                    <div className='subscription-down'>
                                        Become the best coder you can be with <br></br>unlimited access to all the existing and....
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='allcourses2'>
                            <div className='cplus'>
                                <img className='course-box-cplusimg' src={Cplus} width='350px' height='200px'></img>
                                <div className='allcourses-down'>
                                    <div className='subscription'>
                                        All-Access subscription 
                                    </div>
                                    <div className='subscription-down'>
                                        Become the best coder you can be with <br></br>unlimited access to all the existing and....
                                    </div>
                                    <div className='bundels'>
                                        3 Course Bundle
                                    </div>
                                </div>
                            </div>
                            <div className='html-and-css'>
                                <img className='course-box-html-and-css' src={html_cssimg} width='350px' height='200px'></img>
                                <div className='allcourses-down'>
                                    <div className='subscription'>
                                        All-Access subscription 
                                    </div>
                                    <div className='subscription-down'>
                                        Become the best coder you can be with <br></br>unlimited access to all the existing and....
                                    </div>
                                    <div className='bundels'>
                                        3 Course Bundle
                                    </div>
                                </div>
                            </div>
                            <div className='javascript'>
                                <img className='course-box-javascript' src={javascriptimg} width='350px' height='200px'></img>
                                <div className='allcourses-down'>
                                    <div className='subscription'>
                                        All-Access subscription 
                                    </div>
                                    <div className='subscription-down'>
                                        Become the best coder you can be with <br></br>unlimited access to all the existing and....
                                    </div>
                                    <div className='bundels'>
                                        2 Course Bundle
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                
                        
                        <button className='viewallcourses_btn'>View All Courses</button>
                        <div className='Not-sure-where-to-start'>
                            Not sure where to start? Checkout our <a href='#'>learning paths</a>
                        </div>
            </div>
            <div className='bottom'>
                    <div className='amazon'>-- AMAZON --</div>
                    <div className='members'>All-access Members</div>
                    <div className='Why-buy-just'>Why buy just one course when you can them ALL?</div>
                    <div className='money'>
                        44<br></br>
                        COURSES/$29<br></br>PER MONTH
                    </div>
                    <div className='join'>Join a community of 10,00,000+ students</div>
                    <div className='thirtydaysimg'>
                        <img src={thirtydaysimg} width='400px' height='300px'></img>
                    </div>

                    <button className='subscribe_btn'>Subscribe & Save</button>
                    
            </div>
           
        </div>
        
        </div> 
    
    )

}


export default  Homepage;