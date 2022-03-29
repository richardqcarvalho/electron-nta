import React from 'react';
import { motion } from 'framer-motion';
import { Container, Icon } from './styles';
import Close from '../../assets/close.svg';

export default function Header() {
  return (
    <Container
      as={motion.div}
      onClick={() => window.electron.send('close-app')}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.75 }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { x: -40 },
        visible: { x: 0 },
      }}
    >
      <Icon src={Close} />
    </Container>
  );
}
