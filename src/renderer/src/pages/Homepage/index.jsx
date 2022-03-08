import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigateTo = useNavigate();

  return (
    <div>
      <h1>Homepage</h1>
      <button type="button" onClick={() => navigateTo('login')}>Teste</button>
    </div>
  );
}
