import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  user-drag: none;
`;

export const SendIcon = styled.img`
  width: 17.5px;
  height: 17.5px;
  user-drag: none;
`;

export const HideChatIcon = styled.img`
  width: 15px;
  height: 15px;
  user-drag: none;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Circle = styled.div`
  position: absolute;
  bottom: 50px;
  left: calc(50vw - 30px);
  border-radius: 50%;
  background-color: ${colors.danger};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`;

export const PhoneCircle = styled.div`
  border-radius: 50%;
  background-color: ${colors.danger};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const ChatCircle = styled.div`
  border-radius: 50%;
  background-color: ${colors.primary};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-left: 10px;
`;

export const CallContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: ${colors.completeBackground};
  z-index: 5;
  display: flex;
  justify-content: center;
`;

export const InfoText = styled.span`
  color: ${colors.secondary};
  font-size: 16pt;
  margin-bottom: 10px;
  user-select: none;
`;

export const ChatContainer = styled.div`
  width: 50vw;
  height: calc(100vh - 50px);
  background-color: ${colors.secondary};
  z-index: 6;
  position: relative;
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  width: 50vw;
  height: calc(100vh - 50px);
`;

export const IconsContainer = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  width: 50vw;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
`;

export const ChatInput = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.secondary};
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  color: ${colors.secondary};
  width: calc(50vw - 85px);
  margin-right: 7.5px;
`;

export const ChatSendButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.primary};
  border-radius: 50%;
  margin-left: 7.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatMessage = styled.div`
  background-color: ${colors.primary};
  width: 25vw;
  height: auto;
  float: right;
  font-size: 9pt;
  padding: 10px 10px;
  color: ${colors.secondary};
  border-radius: 16px;
  word-wrap: break-word;
  margin-bottom: 5px;
`;

export const ChatMessagesContainer = styled.div`
  width: 50vw;
  height: calc(100vh - 120px);
  align-items: right;
  padding: 35px 10px 10px 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatFooter = styled.div`
  width: 50vw;
  height: 70px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${colors.header};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
