import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const IconContainer = styled.div`
  position: absolute;
  background-color: ${colors.secondary};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  -webkit-app-region: no-drag;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  user-drag: none;
`;

export const HeaderContainer = styled.div`
  background-color: ${colors.header};
  width: 100vw;
  height: 50px;
  -webkit-app-region: drag;
  z-index: 6;
`;
