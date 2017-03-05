import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalX from 'ModalX';
import Message from 'Message';

import { openModal, closeModal } from 'src/actions/modal';

require('./welcome.scss');

export class Welcome extends Component {

  static defaultProps = {
    modal: {}
  };

  static propTypes = {
    modal: PropTypes.obj,
    closeModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
  }

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="welcome">
        <Message openModal={this.props.openModal} />
        <ModalX modal={this.props.modal} closeModal={this.props.closeModal} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
