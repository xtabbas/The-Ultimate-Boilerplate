import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Link to="/login">Hello Home</Link>
      </div>
    );
  }

}

export default Home;

