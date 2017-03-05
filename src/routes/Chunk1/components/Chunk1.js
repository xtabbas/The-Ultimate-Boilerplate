import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Chunk1 = (props) => {
  return (
    <div>
      Hello Chunk1
      <Link to="/chunk1/chunk11">chunk11</Link>
      <Link to="/chunk1/chunk12">chunk12</Link>
      {props.children}
    </div>
  );
};

export default Chunk1;

Chunk1.propTypes = {
  children: PropTypes.object
};

Chunk1.defaultProps = {
  children: {}
};
