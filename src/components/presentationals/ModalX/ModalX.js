import React, { PropTypes } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalX = props => {

  let { closeModal, modal } = props

  return(
    <Modal show={modal.modalType === 'MODAL'} onHide={() => {
      closeModal()
    }}>
      <Modal.Header closeButton>
        <Modal.Title>Example Modal</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h6>It works!</h6>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => {
          closeModal()
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalX