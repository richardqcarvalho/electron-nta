import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Wrapper, Container } from './styles';
import { login as loginAction } from '../../actions/user.action';
import Button from '../../components/Button';
import Input from '../../components/Input';

function Login({ login }) {
  const navigateTo = useNavigate();
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
  });

  const handleLogin = () => {
    login(credentials, navigateTo, '/');
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
          user: value,
        })}
        />
        <Input
          type="password"
          onChange={({ target: { value } }) => setCredentials({
            ...credentials,
            password: value,
          })}
        />
        <Button
          onClick={() => handleLogin()}
          text="Entrar"
        />
      </Wrapper>
    </Container>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: loginAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
