import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 8px;
  font-size: 10pt;
  margin-bottom: 10px;
`;
