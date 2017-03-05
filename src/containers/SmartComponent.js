import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DumbComponent from 'components/DumbComponent';

import { openModal, closeModal } from 'modules';

export class SmartComponent extends Component {

  static propTypes = {
    modal: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
  };

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <DumbComponent openModal={this.props.openModal} modal={this.props.modal} closeModal={this.props.closeModal} />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openModal,
    closeModal
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SmartComponent);
