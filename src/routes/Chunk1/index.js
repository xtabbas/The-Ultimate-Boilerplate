import chunk11 from './routes/Chunk11';
import chunk12 from './routes/Chunk12';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: 'chunk1',

  // getChildRoutes(partialNextState, cb) {
  //   System.import('./routes/Chunk11').then(loadRoute(cb)).catch(errorLoading);
  //   System.import('./routes/Chunk12').then(loadRoute(cb)).catch(errorLoading);
  // },

  childRoutes: [
    chunk11,
    chunk12
  ],
  getComponent(location, cb) {
    System.import('./components/Chunk1').then(loadRoute(cb)).catch(errorLoading);
  }
};
