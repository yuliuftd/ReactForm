import React, {useState, useEffect} from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi"
import { toast } from "react-toastify";

const ManageCoursesPage = (props) => {
    // debugger
    const [errors, setErrors] = useState({});
    const [course, setCourses] = useState({
        id:null,
        slug: "",
        title: "",
        authorId: null,
        category: "",
    });
    useEffect(()=> {
        const slug = props.match.params.slug
        if(slug) {
            courseApi.getCourseBySlug(slug).then(_course => setCourses(_course))
        }
    }, [props.match.params.slug])
    const handleChange = (event) => {
        const updateCourses = {...course, [event.target.name]:event.target.value}
        console.log(updateCourses);
        setCourses(updateCourses)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!formIsValid()) return
        courseApi.saveCourse(course).then(()=> {
            props.history.push("/courses")
            toast.success("Course Saved")
        })
    }
    const formIsValid = () => {
        debugger
        const _errors = {}
        if(!course.title) _errors.title = "Title is required"
        if(!course.authorId) _errors.authorId = "Author is required"
        if(!course.category) _errors.category = "Category is required"
        setErrors(_errors)
        return Object.keys(_errors).length === 0
    }
    return (
        <>
        <h2>Manage Courses</h2>
        {/* <Prompt when={true} message="Are you sure you want to leave?"></Prompt>
        {props.match.params.slug} */}
        <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit}/>
        </>
    )
}

export default ManageCoursesPage;