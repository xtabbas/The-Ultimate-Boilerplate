import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h4>Home page</h4>
        <Link to="/login">Go To Login</Link>
        <h5>
          /landing is not allowed access until user logs in
        </h5>
      </div>
    );
  }

}

export default Home;

