import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
`;

export const BackIconContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackIcon = styled.img`
  width: 20px;
  height: 20px;
  user-drag: none;
`;

export const PhoneIcon = styled.img`
  width: 30px;
  height: 30px;
  user-drag: none;
`;

export const Circle = styled.div`
  border-radius: 50%;
  background-color: green;
  padding: 15px;
`;

export const InfoTitle = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const InfoText = styled.span`
  margin-bottom: 10px;
`;
