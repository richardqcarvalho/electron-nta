import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { getUser as getUserAction } from '../../actions/user.action';
import {
  Container,
  Card,
  BackIcon,
  PhoneIcon,
  Circle,
  InfoTitle,
  InfoText,
  BackIconContainer,
} from './styles';
import Back from '../../assets/back.svg';
import Phone from '../../assets/phone.svg';

function UserDetail({ userReducer, getUser }) {
  const navigateTo = useNavigate();
  const {
    state: {
      user,
    },
  } = useLocation();

  useEffect(() => {
    const userString = localStorage.getItem('user');
    const loggedUser = JSON.parse(userString);

    getUser({
      user: loggedUser.auth_username,
      password: loggedUser.auth_password,
      id: user.id,
    });
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
      {userReducer.selectedUser && (
        <Card>
          <BackIconContainer
            as={motion.div}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.75 }}
          >
            <BackIcon
              src={Back}
              onClick={() => navigateTo('/')}
            />
          </BackIconContainer>
          <button
            type="button"
            onClick={() => {}}
          >
            Tabs
          </button>
          <InfoTitle>Country</InfoTitle>
          <InfoText>{userReducer.selectedUser.country}</InfoText>
          <InfoTitle>E-mail</InfoTitle>
          <InfoText>{userReducer.selectedUser.email}</InfoText>
          <Circle
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <PhoneIcon src={Phone} />
          </Circle>
        </Card>
      )}
    </Container>
  );
}

UserDetail.propTypes = {
  getUser: PropTypes.func.isRequired,
  userReducer: PropTypes.shape({
    selectedUser: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUser: getUserAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
