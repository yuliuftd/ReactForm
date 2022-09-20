import React, {useEffect, useState} from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CoursesList";
import {Link} from "react-router-dom";

function CoursesPage() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getCourses().then(courses => {
            setCourses(courses)
            console.log(courses)
        })
    }, [])

    return (
        <>
        <Link to="/course" className="btn btn-primary" >Add Course</Link>
        <CoursesList courses={courses} />
        </>
    
    )
}

export default CoursesPage;