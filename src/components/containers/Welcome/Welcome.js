import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ModalX from 'ModalX';
import Message from 'Message';

import { openModalAction, closeModalAction } from 'src/actions/modal';

require('./welcome.scss');

export class Welcome extends Component {

  static propTypes = {
    modal: PropTypes.object,
    closeModal: PropTypes.func,
    openModal: PropTypes.func
  }

  componentWillMount() {}
  componentWillUnmount() {}

  render() {
    const {
            props: {
                openModal,
                closeModal,
                modal
            }
        } = this;

    return (
      <div className="welcome">
        <Message openModal={openModal} />
        <ModalX modal={modal} closeModal={closeModal} />
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
    openModalAction,
    closeModalAction
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
