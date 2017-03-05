import React from 'react';

import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configure } from 'configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from 'src/routes';


const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Provider store={store}>
      <Router key={Math.random()} history={history} >
        {routes}
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('src/routes', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <Router key={Math.random()} history={history} >
            {routes}
          </Router>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

