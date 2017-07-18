import React from 'react';

import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configure } from 'configureStore';
import { Provider } from 'react-redux';

// import route from 'src/routes';
import App from 'src/routes';

const store = configure();

function renderDOM() {
  render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
}
renderDOM();

if (module.hot) {
  module.hot.accept('src/routes', () => {
    renderDOM();
  });
}

