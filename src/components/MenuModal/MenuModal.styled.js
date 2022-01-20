import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  height: calc(100vh);
  width: 300px;
  z-index: 1;
  background-color: #9c90b1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NavItem = styled.div`
  cursor: pointer;
`;

export { MenuContainer, NavItem };
