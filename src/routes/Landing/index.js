import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthMiddleware from 'modules/auth/middleware';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout: () => AuthMiddleware.logout()
  }, dispatch);
};

export class Landing extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    const { logout } = this.props;

    return (
      <section className="container text-xs-center">
        <h4>Hello Landing Page</h4>
        <a>now the login/signup routes are denied access</a>
        <h4 >
          <button onClick={logout}>Logout</button>
        </h4>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
