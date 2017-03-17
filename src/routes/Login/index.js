import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
          Hello Login
          <Link to="signup">Signup</Link>
      </div>
    );
  }
}

export default Login;
