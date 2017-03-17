import React, { PropTypes } from 'react';

const LoaderSpinner = ({ size, style, delay }) => (
  <svg className={`loader-spinner${delay ? ' delay' : ''}`} viewBox="0 0 32 32" width={size} height={size} style={style}>
    <circle cx={16} cy={16} r={14} fill="none" />
  </svg>
);

LoaderSpinner.propTypes = {
  style: PropTypes.object,
  size: PropTypes.number,
  delay: PropTypes.bool
};

LoaderSpinner.defaultProps = {
  size: 24,
  delay: true,
  name: '',
  style: {}
};

export default LoaderSpinner;
