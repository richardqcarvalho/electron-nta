import styled from 'styled-components';
import colors from '../../styles/colors.style';

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${colors.secondary};
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  color: ${colors.secondary};
  ::placeholder {
    color: ${colors.placeholder}
  }
`;

export default Input;
