import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { instantiateStore } from './shared';
import Routes from './routes';

const initialState = window.__INITIAL_STATE__; //eslint-disable-line
const { store, history } = instantiateStore(initialState);

const Client = (
  <Provider store={store}>
    <Router history={history}>
      {Routes}
    </Router>
  </Provider>
);

const reactRoot = window.document.getElementById('root');
store.async.setClientPreRender();
render(Client, reactRoot);
store.async.setClientPostRender();

if (process.env.NODE_ENV !== 'production') {
  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
    !reactRoot.firstChild.attributes['data-react-checksum']) {
    console.error( //eslint-disable-line
      `Server-side React render was discarded.
      Make sure that your initial render does not contain any client-side code.`
    );
  }
}
