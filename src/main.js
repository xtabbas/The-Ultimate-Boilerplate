import React from 'react';
import { render } from 'react-dom';
import nprogress from 'nprogress';
import configureStore from './store/configureStore';
import Root from './routes/index';

// Inject global styles
import('src/styles/app.scss');
// Hide spinner from nprogress
nprogress.configure({
  showSpinner: false
});

// Configure Redux store
const store = configureStore();

// Render React
const rootEl = document.getElementById('root');

if (process.env.NODE_ENV === 'production') {
  // console.log = () => {};
  render(<Root store={store} />, rootEl);
} else {
  const AppContainer = require('react-hot-loader').AppContainer; // eslint-disable-line global-require
  // Trick babel to avoid hoisting <AppContainer />
  // transform-react-constant-elements
  const noHoist = {};

  render((
    <AppContainer {...noHoist}>
      <Root store={store} />
    </AppContainer>
  ), rootEl);

  // Hot Reloading
  if (module.hot) {
    module.hot.accept('./routes/index', () => {
      render(
        <AppContainer {...noHoist}>
          <Root store={store} />
        </AppContainer>,
        rootEl
      );
    });
  }
}
