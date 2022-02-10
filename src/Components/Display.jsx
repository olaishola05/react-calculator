/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Display({ data }) {
  return (
    <div className="output">
      <span className="value">{data}</span>
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Display;
