import styled from 'styled-components';
import colors from '../../styles/colors.style';

const Button = styled.button`
  background-color: ${colors.secondary};
  border: none;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  color: ${colors.primary};
`;

export default Button;
