import React from 'react'
import { Modal, Button } from 'react-bootstrap'

let MyModal = props => {
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

export default MyModal
