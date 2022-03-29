import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  CallContainer,
  Icon,
  PhoneCircle,
  ChatCircle,
  InfoText,
  Circle,
  ChatContainer,
  TopInfo,
  IconsContainer,
  LeftContainer,
  ChatInput,
  ChatFooter,
  ChatMessage,
  ChatSendButton,
  ChatMessagesContainer,
  SendIcon,
  HideChatIcon,
} from './styles';
import Phone from '../../assets/phone.svg';
import Chat from '../../assets/chat.svg';
import Send from '../../assets/send.svg';
import Hide from '../../assets/hide.svg';

function Call() {
  const {
    state: {
      user,
      index,
      selectedUser,
    },
  } = useLocation();
  const navigateTo = useNavigate();
  const [calling, setCalling] = useState(true);
  const [timeAmount, setTimeAmount] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const minutes = Math.floor(timeAmount / 60);
  const seconds = timeAmount % 60;
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef();
  const sendMessage = () => {
    setMessages((state) => [...state, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    setInterval(() => setCalling(false), 4000);
  }, []);

  useEffect(() => {
    if (!calling) setTimeout(() => setTimeAmount((state) => state + 1), 1000);
  }, [calling, timeAmount]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <CallContainer
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { y: 700 },
        visible: { y: 0 },
      }}
    >
      <LeftContainer>
        {calling ? (
          <TopInfo>
            <InfoText>{`Calling to ${selectedUser.title} ${selectedUser.forename} ${selectedUser.surname}`}</InfoText>
            <InfoText>{`${selectedUser.number}`}</InfoText>
          </TopInfo>
        ) : (
          <TopInfo>
            <InfoText>{`${selectedUser.title} ${selectedUser.forename} ${selectedUser.surname}`}</InfoText>
            <InfoText>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</InfoText>
          </TopInfo>
        )}
        {calling ? (
          <Circle
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateTo('/user-detail', {
              state: {
                user,
                index,
              },
            })}
          >
            <Icon src={Phone} />
          </Circle>
        ) : (
          <IconsContainer>
            <PhoneCircle
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigateTo('/user-detail', {
                state: {
                  user,
                  index,
                },
              })}
            >
              <Icon src={Phone} />
            </PhoneCircle>
            <ChatCircle
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowChat((state) => !state)}
            >
              <Icon src={Chat} />
            </ChatCircle>
          </IconsContainer>
        )}
      </LeftContainer>
      {showChat && (
        <ChatContainer
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { x: 350 },
            visible: { x: 0 },
          }}
          transition={{
            bounce: 0,
          }}
        >
          <HideChatIcon
            src={Hide}
            as={motion.img}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
            onClick={() => setShowChat(false)}
          />
          <ChatMessagesContainer ref={chatContainerRef}>
            {messages.map((message) => (
              <ChatMessage
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { x: 300, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{
                  bounce: 0,
                }}
              >
                {message}
              </ChatMessage>
            ))}
          </ChatMessagesContainer>
          <ChatFooter>
            <ChatInput
              value={inputValue}
              onChange={({
                target: {
                  value,
                },
              }) => setInputValue(value)}
              onKeyDown={({ key }) => {
                if (key === 'Enter') sendMessage();
              }}
            />
            <ChatSendButton
              onClick={() => sendMessage()}
              src={Send}
            >
              <SendIcon src={Send} />
            </ChatSendButton>
          </ChatFooter>
        </ChatContainer>
      )}
    </CallContainer>
  );
}

export default Call;
