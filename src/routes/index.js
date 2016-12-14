import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import Welcome from 'Welcome'

import { configure } from 'configureStore'

require('src/styles/app.scss')

var store = configure()
const history = syncHistoryWithStore(browserHistory, store)

export default (
  <Provider store={store}>
    <Router history = { history } >
      <Route path="/">
        <IndexRoute component={Welcome} />
      </Route>
    </Router>
  </Provider>
)
