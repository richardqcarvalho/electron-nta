import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import Header from './src/components/Header';
import './src/styles/global.style.css';
import store from './src/store';

render(
  <Provider store={store}>
    <Header />
    <Routes />
  </Provider>,
  document.getElementById('renderer'),
);
