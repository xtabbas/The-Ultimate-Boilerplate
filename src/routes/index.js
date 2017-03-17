import asyncRoute from 'utils/asyncComponent';

// Import causes routes to be code-split
// We have to specify each route name/path in order to be statically analyzed by webpack
export const Landing = asyncRoute(() => import('./Landing'));
export const Login = asyncRoute(() => import('./Login'));
export const Signup = asyncRoute(() => import('./Signup'));
export const Miss404 = asyncRoute(() => import('./Miss404'));
export const Home = asyncRoute(() => import('./Home'));


// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
  require('./Landing'); // eslint-disable-line global-require
  require('./Login'); // eslint-disable-line global-require
  require('./Signup'); // eslint-disable-line global-require
  require('./Miss404'); // eslint-disable-line global-require
  require('./Home'); // eslint-disable-line global-require
}
