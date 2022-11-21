import React from 'react';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import RoutesApp from './routes';

import Header from './components/Header';

import store from './store';
import history from './services/history';

export default function App() {
  return (
    <Provider store={store}>
      <Router  history={history}>
        <Header />
        <RoutesApp />
      </Router>
    </Provider>
  );
}