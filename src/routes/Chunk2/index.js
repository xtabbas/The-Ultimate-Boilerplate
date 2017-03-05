function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: 'chunk2',
  getComponent(location, cb) {
    System.import('./components/Chunk2').then(loadRoute(cb)).catch(errorLoading);
  }
};
