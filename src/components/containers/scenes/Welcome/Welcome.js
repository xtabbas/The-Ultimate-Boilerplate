import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  MyModal  from 'MyModal'
import  Message  from 'Message'

import { openModal, closeModal } from 'src/actions/modal'

require('./welcome.scss')

export const Welcome = props => {
      const { openModal, closeModal } = props

      return(
        <div className='welcome'>
          <Message {...props} />
          <MyModal {...props} />
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
