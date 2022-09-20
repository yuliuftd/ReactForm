import React from 'react'
import TextInput from './common/TextInput';
import PropType from "prop-types";

export default function CourseForm(props) {
    const onChange = props.onChange
    const onSubmit = props.onSubmit
    const errors = props.errors
  return (
    <form onSubmit={onSubmit}>
      
          <TextInput
            id="title"
            type="text"
            label='Title'
            onChange={onChange}
            name="title"
            className="form-control"
            value={props.course.title}
            error={errors.title}
          />
        

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {errors.authorId && <div className='alert alert-danger'>{errors.authorId}</div>}
      </div>

      
          <TextInput
            type="text"
            id="category"
            label='Category'
            name="category"
            onChange={onChange}
            className="form-control"
            value={props.course.category}
            error={errors.category}
          />
       

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
    course:PropType.object.isRequired,
    onSubmit: PropType.func.isRequired,
    onChange: PropType.func.isRequired,
    errors: PropType.object.isRequired,
}