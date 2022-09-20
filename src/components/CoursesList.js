import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CoursesList = (props) => {
    console.log(props)
    return <>{props.courses.map(x => <h2 key={x.id}><Link to={"/course/" + x.slug}>{x.title}</Link></h2> )}</>
}
// CoursesList.propTypes = {
//     courses: PropTypes.array.isRequired
// }
// CoursesList.defaultProps = {
//     courses: []
// }

CoursesList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    })).isRequired
}
export default CoursesList;
