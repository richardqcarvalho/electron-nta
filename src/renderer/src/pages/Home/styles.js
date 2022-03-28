import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  background-color: ${colors.primary};
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 100px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  z-index: 2;
  position: relative;
`;

export const BoxText = styled.span`
  pointer-events: none;
  user-select: none;
  font-size: 12pt;
  font-weight: bold;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 25px;
  user-drag: none;
`;
