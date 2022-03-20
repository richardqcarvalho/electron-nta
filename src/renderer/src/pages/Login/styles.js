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
