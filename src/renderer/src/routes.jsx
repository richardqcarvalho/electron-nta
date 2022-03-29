import React from 'react';
import {
  BrowserRouter, Route, Routes as Container,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import Call from './pages/Call';

export default function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-detail" element={<UserDetail />} />
        <Route path="/call" element={<Call />} />
      </Container>
    </BrowserRouter>
  );
}
