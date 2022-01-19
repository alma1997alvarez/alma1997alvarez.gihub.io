import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 300px;
  z-index: 1;
  background-color: hotpink;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NavItem = styled.a`
  cursor: pointer;
`;

export { MenuContainer, NavItem };
