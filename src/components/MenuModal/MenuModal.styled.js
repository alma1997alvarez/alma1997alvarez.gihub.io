import styled from 'styled-components';

const MenuContainer = styled.div`
  position: absolute;
  top: 62px;
  left: 0;
  height: calc(100vh - 62px);
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
