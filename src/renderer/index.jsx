import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import Close from './src/components/Close';
import './src/styles/global.style.css';
import store from './src/store';

render(
  <Provider store={store}>
    <Close />
    <Routes />
  </Provider>,
  document.getElementById('renderer'),
);
