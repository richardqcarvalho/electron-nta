import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { getUsers as getUsersAction } from '../../actions/user.action';
import {
  Wrapper, Container, Box,
} from './styles';

function Home({ getUsers, userReducer }) {
  const navigateTo = useNavigate();
  useEffect(() => {
    const userString = localStorage.getItem('user');

    if (!userString) navigateTo('/login');
    else {
      const user = JSON.parse(userString);
      getUsers({ user: user.auth_username, password: user.auth_password });
    }
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
        {userReducer.list.map((user) => (
          <Box
            as={motion.div}
            onClick={() => {}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {user.username}
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
}

Home.propTypes = {
  getUsers: PropTypes.func.isRequired,
  userReducer: PropTypes.shape({
    list: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUsers: getUsersAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
