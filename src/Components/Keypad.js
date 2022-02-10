/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export const Keypad = (props) => {
  const { children } = props;
  return <div className="keypad">{children}</div>;
};

Keypad.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Keypad;
