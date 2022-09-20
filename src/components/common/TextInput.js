import React from 'react'
import PropTypes from "prop-types";

export default function TextInput(props) {
    const {id, label, name, onChange, value, error} = props
    let wrapperClass = "form-group"
    if(error.lentgh > 0) {
        wrapperClass += " has-error"
    }
  return (
    <div className={wrapperClass}>
        <label htmlFor={id}>{label}</label>
        <div className='field' >
            <input 
                id={id}
                type='text'
                name={name}
                onChange={onChange}
                className='form-control'
                value={value} />
        </div>
        {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
}

TextInput.defaultProps = {
    error:""
}
