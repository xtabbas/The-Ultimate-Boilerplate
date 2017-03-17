import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
// Routes
import { Home, Login, Signup, Landing } from 'routes';
import Miss404 from 'routes/Miss404';

const Layout = () => (
  <div>
    <Helmet titleTemplate="%s - DeviceNet" defaultTitle="DeviceNet" />

    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/Signup" component={Signup} exact={true} />
      <Route path="/Landing" component={Landing} exact={true} />
      <Route component={Miss404} />
    </Switch>

  </div>
);

export default Layout;
