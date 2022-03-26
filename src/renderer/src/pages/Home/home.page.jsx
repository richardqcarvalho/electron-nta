import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import {
  Wrapper, Container, Button,
} from './styles';

function Home() {
  const navigateTo = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('id');

    if (!user) navigateTo('/login');
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Home);
