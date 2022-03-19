import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wrapper, Container, Input, Button,
} from './styles';
import { login } from '../../actions/user.action';

export default function Login() {
  // const navigateTo = useNavigate();
  const [credentials, setCredentials] = useState({
    user: 'richard',
    password: 'vv2Tw1672ReWpK7n0nzR3sKyyYqcINud',
  });

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
        <Input onChange={({ target: { value } }) => setCredentials({
          ...credentials,
          user: value,
        })}
        />
        <Input onChange={({ target: { value } }) => setCredentials({
          ...credentials,
          password: value,
        })}
        />
        <Button
          as={motion.button}
          onClick={() => login(credentials)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Entrar
        </Button>
      </Wrapper>
    </Container>
  );
}
