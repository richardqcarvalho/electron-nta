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

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.secondary};
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  color: ${colors.secondary};
`;

export const Button = styled.button`
  background-color: ${colors.secondary};
  border: none;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  color: ${colors.primary};
`;
