import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { modal } from './motherReducer'

export default combineReducers({
  modal,
  routing: routerReducer
})
