import styled from 'styled-components';
import colors from '../../styles/colors.style';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  background-color: ${colors.primary};
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 100px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  z-index: 2;
  position: relative;
`;

export const BoxText = styled.span`
  pointer-events: none;
  user-select: none;
  font-size: 12pt;
  font-weight: bold;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 25px;
  user-drag: none;
`;

export const SeeTabs = styled.div`
  min-width: 100px;
  min-height: 50px;
  border-radius: 25px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: ${colors.secondary};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const SeeTabsText = styled.span`
  font-size: 8pt;
  font-weight: bold;
  color: ${colors.primary};
  pointer-events: none;
  user-select: none;
`;

export const Modal = styled.div`
  position: relative;
  min-width: 400px;
  background-color: ${colors.secondary};
  z-index: 4;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${colors.transparentBackground};
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutContainer = styled.div`
  position: absolute;
  background-color: ${colors.secondary};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutIcon = styled.img`
  width: 15px;
  height: 15px;
  user-drag: none;
`;
