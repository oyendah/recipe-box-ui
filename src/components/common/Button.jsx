import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, value, onClick }) =>
  <input
    className="button-primary"
    type={type}
    value={value}
    onClick={onClick} />
;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
