import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router-dom';

import AuthMiddleware from 'modules/auth/middleware';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    isLoggedIn: () => AuthMiddleware.isLoggedIn()
  }, dispatch);
};

class PrivateRoute extends Component {
  static propTypes = {
    component: React.PropTypes.func.isRequired,
    isAuthenticated: React.PropTypes.bool,
    isLoggedIn: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    isAuthenticated: false
  };

  constructor(props) {
    super(props);
    if (!props.isAuthenticated) {
      setTimeout(() => {
        props.isLoggedIn();
      }, 5);
    }
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      console.log('authenticated');
    } else {
      console.log('not authenticated');
    }
  }
  componentWillUnmount() {}

  render() {
    const { isAuthenticated, component, ...rest } = this.props;
    if (isAuthenticated !== null) {
      return (
        <Route
          {...rest} render={props => (
            isAuthenticated ? (
              React.createElement(component, props)
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location }
                }}
              />
            )
          )}
        />
      );
    } return null;
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
