import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import routes from 'src/routes';

render(
  <AppContainer>
    {routes}
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('src/routes', () => {
    render(
      <AppContainer>
        {routes}
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
