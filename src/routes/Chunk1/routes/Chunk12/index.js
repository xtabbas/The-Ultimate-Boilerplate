function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: 'chunk12',
  getComponent(location, cb) {
    System.import('./components/Chunk12').then(loadRoute(cb)).catch(errorLoading);
  }
};
