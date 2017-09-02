import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

const Input = ({ type, value, onChange, placeholder, id, label }) =>
  <div>
    <Label forInput={id} name={label} />
    <input
      className="u-full-width"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      id={id}
      label={label}/>
  </div>
;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string
};

export default Input;
