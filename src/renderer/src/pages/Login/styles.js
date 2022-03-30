import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  width: 100vw;
  height: calc(100vh - 50px);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ErrorMessage = styled.span`
  font-weight: bold;
  color: ${colors.secondary};
  margin-left: 10px;
  font-size: 8pt;
`;

export const ErrorContainer = styled.div`
  padding: 5px;
  background-color: ${colors.danger};
  margin-top: 10px;
  border-radius: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const ErrorIcon = styled.img`
  width: 20px;
  height: 20px;
  user-drag: none;
`;
