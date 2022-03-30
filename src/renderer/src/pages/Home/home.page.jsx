import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@reduxjs/toolkit';
import Loading from 'react-loading';
import { v4 as uuid } from 'uuid';
import { getUsers as getUsersAction, logout as logoutAction } from '../../actions/user.action';
import {
  Container,
  Box,
  BoxText,
  Avatar,
  SeeTitles,
  SeeTitlesText,
  Modal,
  ModalBackground,
  LogoutContainer,
  LogoutIcon,
  SearchInput,
  SearchWrapper,
  SearchBody,
  Processes,
  Message,
  MessageContainer,
  CentralizedContainer,
} from './styles';
import Profile from '../../assets/profile.svg';
import Logout from '../../assets/logout.svg';
import colors from '../../styles/colors.style';
import Button from '../../components/Button';

function Home({ getUsers, userReducer, logout }) {
  const navigateTo = useNavigate();
  const [showTabs, setShowTabs] = useState(false);
  const [userId, setUserId] = useState(null);
  const [shellResult, setShell] = useState([]);
  const [procSearchLoading, setProcSearchLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');

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

  const searchProcess = () => {
    setProcSearchLoading(true);

    window.electron.exec(`TASKLIST /v /fo csv | find "${searchInput}"`, (_, response) => {
      const lines = response.split('\r\n');

      if (lines.length > 0) {
        const titles = lines.map((line) => {
          const split = line.split(',');
          return split[split.length - 1].replaceAll('"', '');
        });

        setShell(titles);
      } else {
        setShell([]);
      }
      setProcSearchLoading(false);
    });
  };

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
            key={uuid()}
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
      <SeeTitles
        as={motion.div}
        onClick={() => {
          setShell([]);
          setShowTabs(true);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { x: 110 },
          visible: { x: 0 },
        }}
      >
        <SeeTitlesText>Check titles</SeeTitlesText>
      </SeeTitles>
      {showTabs && (
      <ModalBackground onClick={() => setShowTabs(false)}>
        <Modal onClick={(event) => event.stopPropagation()}>
          <SearchWrapper>
            <SearchInput
              onChange={({ target: { value } }) => setSearchInput(value)}
              placeholder="Type a process or program"
              onKeyDown={({ key }) => {
                if (key === 'Enter') searchProcess();
              }}
            />
            <Button
              onClick={() => searchProcess()}
              text="Search"
              color={colors.primary}
              textColor={colors.secondary}
            />
          </SearchWrapper>
          <MessageContainer>
            <Message>{'Please, if you\'ll search for a program, use uppercase. Look for "Google Chrome", eg.'}</Message>
          </MessageContainer>
          <SearchBody>
            {procSearchLoading ? (
              <CentralizedContainer>
                <Loading
                  type="spin"
                  color={colors.primary}
                  height={40}
                  width={40}
                />
              </CentralizedContainer>
            ) : (
              shellResult.length === 0 ? (
                <CentralizedContainer>
                  <Processes>{'No processes found'}</Processes>
                </CentralizedContainer>
              ) : (
                shellResult.map((result) => (
                  <Processes key={uuid()}>{`> ${result}`}</Processes>
                ))
              )
            )}
          </SearchBody>
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
