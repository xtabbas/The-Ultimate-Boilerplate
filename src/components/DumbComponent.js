import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class DumbComponent extends Component {

  static propTypes = {
    openModal: PropTypes.func.isRequired,
    modal: PropTypes.object,
    closeModal: PropTypes.func.isRequired
  };

  static defaultProps = {
    modal: {}
  };

  render() {
    const { openModal, closeModal, modal } = this.props;

    return (
      <div>
        Hello From Dumbest Component Ever
        <button onClick={() => openModal('MODAL', {})}>Action!</button>
        <Modal
          show={modal.modalType === 'MODAL'} onHide={() => {
            closeModal();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Ahha</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h6>It works!</h6>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={() => {
                closeModal();
              }}
            >Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}

export default DumbComponent;
