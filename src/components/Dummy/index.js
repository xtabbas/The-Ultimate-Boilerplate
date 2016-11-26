import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleAction } from './actions'

export const DummyComponent = ({ dispatch, toggle }) => {
    let text
    if(toggle){
        text = <p>You performed an action</p>
    }else {
      text = null
    }
      return(
        <div>
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
