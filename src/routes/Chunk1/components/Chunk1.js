import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const Chunk1 = () => {
  return (
    <div>
      Hello Chunk1
      <Link to="/chunk1/chunk11">chunk11</Link>
      <Link to="/chunk1/chunk12">chunk12</Link>
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
