import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { getUsers as getUsersAction } from '../../actions/user.action';
import {
  Container,
  Box,
  BoxText,
  Avatar,
} from './styles';
import Profile from '../../assets/profile.svg';

function Home({ getUsers, userReducer }) {
  const navigateTo = useNavigate();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const userString = localStorage.getItem('user');

    if (!userString) navigateTo('/login');
    else {
      const user = JSON.parse(userString);
      setUserId(user.id.toString());
      getUsers({
        user: user.auth_username,
        password: user.auth_password,
      });
    }
  }, []);
  const usersList = userReducer.list
    .filter((user) => user.id !== userId);

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
      {usersList
        .map((user, index) => (
          <Box
            key={user.id}
            as={motion.div}
            onClick={() => navigateTo('/user-detail', {
              state: {
                user,
              },
            })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              ...(index + 1 !== usersList.length
                  && { marginBottom: 50 }),
            }}
          >
            <Avatar src={Profile} />
            <BoxText>{user.forename}</BoxText>
          </Box>
        ))}
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
