import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { getUsers as getUsersAction, logout as logoutAction } from '../../actions/user.action';
import {
  Container,
  Box,
  BoxText,
  Avatar,
  SeeTabs,
  SeeTabsText,
  Modal,
  ModalBackground,
  LogoutContainer,
  LogoutIcon,
} from './styles';
import Profile from '../../assets/profile.svg';
import Logout from '../../assets/logout.svg';

function Home({ getUsers, userReducer, logout }) {
  const [showTabs, setShowTabs] = useState(false);
  const navigateTo = useNavigate();
  const [userId, setUserId] = useState(null);
  const [shellResult] = useState('');

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

  useEffect(() => {
    window.electron.exec('TASKLIST /v /fo list |find /i "google chrome" |find /v "N/A"', (_, stdout) => {
      setShell(stdout);
    });
  }, []);

  const usersList = userReducer.list
    .filter((user) => user.id !== userId);

  const handleLogout = () => {
    logout(navigateTo);
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
      <LogoutContainer
        onClick={() => handleLogout()}
        as={motion.div}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.75 }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { x: 40 },
          visible: { x: 0 },
        }}
      >
        <LogoutIcon src={Logout} />
      </LogoutContainer>
      {usersList
        .map((user, index) => (
          <Box
            key={user.id}
            as={motion.div}
            onClick={() => navigateTo('/user-detail', {
              state: {
                user,
                index,
              },
            })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              ...(index + 1 !== usersList.length
                  && { marginBottom: 50 }),
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { x: -40 },
              visible: { x: 0 },
            }}
          >
            <Avatar src={Profile} />
            <BoxText>{`${user.forename} ${user.surname}`}</BoxText>
          </Box>
        ))}
      <SeeTabs
        as={motion.div}
        onClick={() => setShowTabs(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { x: 110 },
          visible: { x: 0 },
        }}
      >
        <SeeTabsText>See Chrome tabs</SeeTabsText>
      </SeeTabs>
      {showTabs && (
      <ModalBackground onClick={() => setShowTabs(false)}>
        <Modal onClick={(event) => event.stopPropagation()}>
          <motion.span
            onClick={() => window.electron.getTabs()}
          >
            {shellResult}
          </motion.span>
        </Modal>
      </ModalBackground>
      )}
    </Container>
  );
}

Home.propTypes = {
  getUsers: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  userReducer: PropTypes.shape({
    list: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUsers: getUsersAction,
  logout: logoutAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
