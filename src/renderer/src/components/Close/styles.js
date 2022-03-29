import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
  position: absolute;
  background-color: #FFF;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  color: ${colors.primary};
  font-size: 20px;
  pointer-events: none;
  user-select: none;
`;
