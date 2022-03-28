import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
  position: absolute;
  background-color: #FFF;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  color: ${colors.primary};
  font-size: 8pt;
  pointer-events: none;
  user-select: none;
  font-weight: 800;
`;
