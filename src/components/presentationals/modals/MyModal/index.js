import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import { closeModal, openModal } from 'src/actions/modal'

let MyModal = props => {
  let { closeModal, modal } = props

  return(
    <Modal show={modal.modalType === 'MODAL'} onHide={() => {
      closeModal()
    }}>
      <Modal.Header closeButton>
        <Modal.Title>Example Modal</Modal.Title>
      </Modal.Header>

      <Modal.Body></Modal.Body>

      <Modal.Footer>
        <Button onClick={() => {
          closeModal()
        }}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal
