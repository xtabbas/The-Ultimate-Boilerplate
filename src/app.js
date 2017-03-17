import React from 'react';

import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configure } from 'configureStore';
import { Provider } from 'react-redux';

// import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router';
// import { ConnectedRouter } from 'react-router-redux';
// import { renderRoutes } from 'react-router-config';

// import route from 'src/routes';
import App from 'src/routes';

// const routes = [route];
// const history = createHistory();

const store = configure();

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('src/routes', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

