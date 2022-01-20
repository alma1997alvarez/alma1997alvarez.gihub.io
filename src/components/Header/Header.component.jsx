import React, { useContext } from 'react';
import { HeaderStyled } from './Header.styled';

import Searchbar from '../Searchbar';
import DarkModeToggle from '../DarkModeToggle';
import BurgerMenu from '../BurgerMenu';
import LoginAvatar from '../LoginAvatar';
import SessionDetailsContext from '../../context/session-details-context';

const Header = () => {
  const sessionDetailsContext = useContext(SessionDetailsContext);
  const { sessionDetails: { name = '', avatarUrl = '' } = {} } =
    sessionDetailsContext;
  return (
    <HeaderStyled role="header">
      <BurgerMenu />
      <Searchbar />
      <DarkModeToggle />
      <LoginAvatar avatarUrl={avatarUrl} name={name} />
    </HeaderStyled>
  );
};

export default Header;
