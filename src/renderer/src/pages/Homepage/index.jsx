import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wrapper, Container, Button,
} from './styles';

export default function Homepage() {
  const navigateTo = useNavigate();
  const [authenticated] = useState(false);
  useEffect(() => {
    if (!authenticated) navigateTo('/login');
  }, []);

  return (
    <Container
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <Wrapper>
        <Button onClick={() => navigateTo('/login')}>Entrar</Button>
      </Wrapper>
    </Container>
  );
}
