/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ label, value, handleClick }) => (
  <button type="button" className="Button" value={value} onClick={(e) => handleClick(e)}>
    {label}
  </button>
);

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Buttons;
