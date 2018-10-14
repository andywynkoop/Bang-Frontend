import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import App from '../App';
import Welcome from '../Welcome';

const msp = ({ session:loggedIn }) => ({ loggedIn });

const Auth = ({ path, exact, component: Component, loggedIn }) =>
<Route path={path} exact={exact} render={props =>
  loggedIn ? <Redirect to='/' /> : <Component {...props} />
} />

const Root = ({ loggedIn }) =>
<Route path='/' exact render={props => 
  loggedIn ? <App {...props} /> : <Welcome {...props} />
} />

export const AuthRoute = connect(msp)(Auth);
export const RootRoute = connect(msp)(Root);