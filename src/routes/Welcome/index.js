function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: 'welcome',
  getComponent(location, cb) {
    System.import('./components/Welcome').then(loadRoute(cb)).catch(errorLoading);
  }
};
