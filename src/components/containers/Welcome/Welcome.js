import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  MyModal  from 'modals/MyModal'
import  Message  from 'stateless/Message'

import { openModal, closeModal } from 'src/actions/modal'

require('./welcome.scss')

export const Welcome = props => {
      const { openModal, closeModal, modal } = props

      return(
        <div className='welcome'>
          <Message openModal={openModal} />
          <MyModal modal={modal} closeModal={closeModal} />
        </div>
      )
}

const mapStateToProps = state => ({
  modal: state.modal
})

const mapDispatchToProps = dispatch => ({
  openModal: bindActionCreators(openModal, dispatch),
  closeModal: bindActionCreators(closeModal, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
