import React from 'react';
import { motion } from 'framer-motion';
import { Container, Icon } from './styles';

export default function Header() {
  return (
    <Container
      as={motion.div}
      onClick={() => window.electron.send('close-app')}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.5 }}
    >
      <Icon>&#x2715;</Icon>
    </Container>
  );
}
