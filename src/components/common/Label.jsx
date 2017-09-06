import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ name, forInput }) =>
  <label htmlFor={forInput}>{name}</label>
;

Label.propTypes = {
  forInput: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Label;
