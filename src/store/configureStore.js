import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'src/modules/index';
// import { routerMiddleware } from 'react-router-redux';

export const configure = (history, initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept('src/modules/index', () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
};

export default configure;
