import React from 'react';
import {
  BrowserRouter, Route, Routes as Container,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Container>
    </BrowserRouter>
  );
}
