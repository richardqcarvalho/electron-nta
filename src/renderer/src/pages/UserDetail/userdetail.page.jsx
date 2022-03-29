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
      index,
    },
  } = useLocation();
  const fakeNumber = `+${(index + 1).toString().repeat(11)}`;

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
        <Card
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { x: 700 },
            visible: { x: 0 },
          }}
        >
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
          <InfoTitle>Full name</InfoTitle>
          <InfoText>{`${userReducer.selectedUser.title} ${userReducer.selectedUser.forename} ${userReducer.selectedUser.surname}`}</InfoText>
          <InfoTitle>Username</InfoTitle>
          <InfoText>{userReducer.selectedUser.username}</InfoText>
          <InfoTitle>Country</InfoTitle>
          <InfoText>{userReducer.selectedUser.country}</InfoText>
          <InfoTitle>E-mail</InfoTitle>
          <InfoText>{userReducer.selectedUser.email}</InfoText>
          <InfoTitle>Number</InfoTitle>
          <InfoText>{fakeNumber}</InfoText>
          <Circle
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateTo('/call', {
              state: {
                user,
                index,
                selectedUser: {
                  ...userReducer.selectedUser,
                  number: fakeNumber,
                },
              },
            })}
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
