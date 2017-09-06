import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

const Input = ({ type, value, onChange, placeholder, id, label, name, icon }) =>
  <div>
    <Label forInput={id} name={label} />
    <div className="right-inner-addon ">
      <i className={icon} />
      <input
        className="u-full-width"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        label={label}
        name={name}/>
    </div>

  </div>
;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default Input;
