import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigateTo = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <button type="button" onClick={() => navigateTo('/')}>Teste</button>
    </div>
  );
}
