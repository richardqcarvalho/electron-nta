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

export const Box = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  font-size: 10pt;
`;
