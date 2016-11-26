import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'src/reducers/index'

export var configure = (initialState = {}) => {
  var store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
   module.hot.accept('src/reducers/index', () => {
     const nextRootReducer = require('src/reducers/index').default;
     store.replaceReducer(nextRootReducer);
   });
 }

  return store
};
