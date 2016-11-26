import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import toggle from './toggle'

export default combineReducers({
  toggle,
  routing: routerReducer
})
