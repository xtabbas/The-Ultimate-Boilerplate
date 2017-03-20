import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
// Routes
import { Home, Login, Signup, Landing } from 'routes';
import Miss404 from 'routes/Miss404';

import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';

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

