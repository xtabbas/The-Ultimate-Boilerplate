import React from 'react';

import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configure } from 'configureStore';
import { Provider } from 'react-redux';

// import route from 'src/routes';
import App from 'src/routes';

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

