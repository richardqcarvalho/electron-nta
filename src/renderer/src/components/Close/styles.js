import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
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
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  user-drag: none;
`;
