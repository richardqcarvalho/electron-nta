import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Wrapper, Container, Input, Button,
} from './styles';

export default function Login() {
  // const navigateTo = useNavigate();
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  });

  const handleSubmit = () => {
    console.log(credentials);
  };

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
          login: value,
        })}
        />
        <Input onChange={({ target: { value } }) => setCredentials({
          ...credentials,
          password: value,
        })}
        />
        <Button
          as={motion.button}
          onClick={() => handleSubmit()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Entrar
        </Button>
      </Wrapper>
    </Container>
  );
}
