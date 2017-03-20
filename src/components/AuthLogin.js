import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class AuthLogin extends Component {

  static propTypes = {
    isProcessing: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    signin: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      email: 'test@reacttraining.com',
      password: 'test',
      showPassword: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password,
      domain: this.state.domain
    };
    this.props.signin(credentials);
  }

  togglePassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  render() {
    const { isProcessing, isError, errorMessage } = this.props;
    return (
      <div>
        <div>
              Sign In
            </div>
        { isError ? <div>{errorMessage}</div> : null }
        <form onSubmit={this.onSubmit} name="form">
          <div>
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              className="form-control"
              placeholder="Email"
              required=""
            />
          </div>
          <div>
            <input
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder="Password"
              required=""
            />
          </div>
          <div>
            <label htmlFor="remember">
              <input id="remember" type="checkbox" /><i className="info" /> Keep me signed in
                </label>
          </div>
          <button type="submit" disabled={!this.state.email || !this.state.password || isProcessing}>
            { isProcessing ? 'Loading...' : 'Sign In' }
          </button>
        </form>
        <div className="m-y">
          <Link to="forget-password" className="_600">Forgot password?</Link>
        </div>
        <div>
              Do not have an account? <Link to="signup" className="text-info _600">Sign up</Link>
        </div>
      </div>
    );
  }
}

export default AuthLogin;
