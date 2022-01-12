import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Searchbar from '../Searchbar';
import DarkModeToggle from '../DarkModeToggle';
import BurgerMenu from '../BurgerMenu';
import LoginAvatar from '../LoginAvatar';

const Header = styled.header`
  background: #c4b5de;
  padding: 0.25em 0.25em;
  height: 5vh;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MainHeader = () => {
  return (
    <Header>
      <BurgerMenu />
      <Searchbar />
      <DarkModeToggle />
      <LoginAvatar />
    </Header>
  );
};

export default MainHeader;
