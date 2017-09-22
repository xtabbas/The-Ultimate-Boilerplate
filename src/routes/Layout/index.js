import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
// Routes

import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';

import asyncRoute from 'utils/asyncComponent';

const Home = asyncRoute(() => import('../Home'));
const Login = asyncRoute(() => import('../Login'));
const Signup = asyncRoute(() => import('../Signup'));
const Landing = asyncRoute(() => import('../Landing'));
const Miss404 = asyncRoute(() => import('../Miss404'));

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
  require('../Home'); // eslint-disable-line global-require
  require('../Login'); // eslint-disable-line global-require
  require('../Signup'); // eslint-disable-line global-require
  require('../Landing'); // eslint-disable-line global-require
  require('../Miss404'); // eslint-disable-line global-require
}

const Layout = () => (
  <div>
    <Helmet titleTemplate="%s - DeviceNet" defaultTitle="DeviceNet" />

    <Switch>
      <PublicRoute path="/" component={Home} exact={true} />
      <PublicRoute path="/login" component={Login} exact={true} />
      <PublicRoute path="/Signup" component={Signup} exact={true} />
      <PrivateRoute path="/Landing" component={Landing} exact={true} />
      <Route component={Miss404} />
    </Switch>

  </div>
);

export default Layout;
