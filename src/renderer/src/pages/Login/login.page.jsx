import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import {
  Wrapper, Container, ErrorMessage, ErrorContainer, ErrorIcon,
} from './styles';
import { login as loginAction } from '../../actions/user.action';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Alert from '../../assets/alert.svg';

function Login({ userReducer, login }) {
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
        <Input
          onChange={({ target: { value } }) => setCredentials({
            ...credentials,
            user: value,
          })}
          placeholder="Type your username"
          onKeyDown={({ key }) => {
            if (key === 'Enter') handleLogin();
          }}
        />
        <Input
          type="password"
          onChange={({ target: { value } }) => setCredentials({
            ...credentials,
            password: value,
          })}
          placeholder="Type your password"
          onKeyDown={({ key }) => {
            if (key === 'Enter') handleLogin();
          }}
        />
        <Button
          onClick={() => handleLogin()}
          text="Login"
        />
        {userReducer.error && (
          <ErrorContainer
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { y: -50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <ErrorIcon src={Alert} />
            <ErrorMessage>{userReducer.error}</ErrorMessage>
          </ErrorContainer>
        )}
      </Wrapper>
    </Container>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  userReducer: PropTypes.shape({
    error: PropTypes.string,
  }),
};

Login.defaultProps = {
  userReducer: { error: null },
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: loginAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
