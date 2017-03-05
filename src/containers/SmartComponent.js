import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DumbComponent from 'components/DumbComponent';

export class SmartComponent extends Component {

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <DumbComponent />
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent);
