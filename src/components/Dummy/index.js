import React from 'react'
import { connect } from 'react-redux'
import { toggleAction } from './actions'

require('./dummy.scss')

export const DummyComponent = ({ dispatch, toggle }) => {
    let text
    if(toggle){
        text = <p>You performed an action</p>
    }else {
      text = null
    }
      return(
        <div className='dummy'>
          <h1 className="page-title">The Ultimate Boilerplate</h1>

          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <button className="button" onClick={() => {
                  dispatch(toggleAction())
                }}>Click me</button>
                {text}
              </div>
            </div>
          </div>

          <div className="container">
            <h2>Modal Example</h2>
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">

                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Modal Header</h4>
                  </div>
                  <div className="modal-body">
                    <p>Some text in the modal.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )
}

export default connect(
  (state) => {
    return {
      toggle: state.toggle
    }
  }
)(DummyComponent)
