import React from 'react';
import { Redirect, Switch, HashRouter } from 'react-router-dom';
import { AuthRoute, RootRoute } from './util/routes';

import Join from './Join';

const Router = () => (
      <HashRouter>
        <Switch>
          <AuthRoute path="/login" component={Join} />
          <RootRoute />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )


export default Router;