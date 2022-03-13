import React from 'react';
import { render } from 'react-dom';
import Routes from './src/routes';
import Header from './src/components/Header';
import './src/styles/global.css';

render(
  <>
    <Header />
    <Routes />
  </>,
  document.getElementById('root'),
);
