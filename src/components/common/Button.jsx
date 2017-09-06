import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, value, onClick, classType }) =>
  <input
    className={classType}
    type={type}
    value={value}
    onClick={onClick} />
;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classType: PropTypes.string.isRequired,
};

export default Button;
