import React from 'react';
import { BrowserRouter, Route, Routes as Container } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Container>
    </BrowserRouter>
  );
}
