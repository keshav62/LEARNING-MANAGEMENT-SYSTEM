import React, { useEffect, useState } from "react";
import humanizeDuration from 'humanize-duration'; 

import { createContext } from "react"; 
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import {useAuth , useUser} from '@clerk/clerk-react'


export const AppContext = createContext() ; 
export const AppContextProvider = (props)=>{
  
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate()

  const [allCourses , setAllCourses] = useState([]); 
  const [isEducator , setIsEducator] = useState(true); 
  const [enrolledCourse , setEnrolledCourse] = useState([]); 
  const {getToken} = useAuth() ; 
  const {user} = useUser() ; 

  const fetchAllCourses = async ()=>{ 
    setAllCourses(dummyCourses) ; 
  }


  //function to calculate average rating 
  const calculateRating = (course)=>{
    if(course.courseRatings.length === 0){
      return 0 ; 
    }
    let totalRating = 0 ; 
    course.courseRatings.forEach(rating => {
        totalRating += rating.rating ; 
    });
    return totalRating / course.courseRatings.length ; 
  }

  //Function to Calculate Course Chapter Time 
  const calculateChapterTime = (chapter) =>{
    let time = 0 ; 
    chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000 , {units : ['h' , 'm']})
  }

  //Function to Calculate course Duration 
  const calculateCourseDuration = (course) =>{
    let time = 0 ; 

    course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => time += lecture.lectureDuration))

    return humanizeDuration(time * 60 * 1000 , {units : ['h' , 'm']})
  }

  // Function to Calculate no of Leacture in the course 
  const calculateNoOfLecture = (course)=> {
    let totalLecture = 0 ; 
    course.courseContent.forEach(chapter => {
      if(Array.isArray(chapter.chapterContent)){
          totalLecture += chapter.chapterContent.length; 
      }
    })
    return totalLecture ; 
  }

  //Fetch user enrolled courses
  const fetchUserEnrolledCourses = async ()=>{
    setEnrolledCourse(dummyCourses) ; 
  }


  useEffect(()=>{
    fetchAllCourses(); 
    fetchUserEnrolledCourses() ; 
  },[])

  const logToken = async ()=>{
    console.log( await getToken()) ; 
  }

  useEffect(()=>{
    if(user) { 
      logToken() ; 
    }
  }, [user])
  
  const value = {
    currency , allCourses , navigate , calculateRating , isEducator , setIsEducator ,calculateNoOfLecture ,calculateCourseDuration , calculateChapterTime , enrolledCourse , fetchUserEnrolledCourses
  }
  
  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
