import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import mancato from 'mancato';
window.mancato = mancato;

document.addEventListener("DOMContentLoaded", () => {
  mancato.get('http://localhost:3001/session').then(({ user:session, game }) => {
    const store = createStore(rootReducer, { session, game }, applyMiddleware(thunk));
    window.getState = store.getState;
    ReactDOM.render(
      <Provider store={store}>
        <Router />
      </Provider>,
      document.getElementById('root')
    );
  });
});