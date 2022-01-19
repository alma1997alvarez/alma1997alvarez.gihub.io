import React, { useContext, useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { MenuContainer, NavItem } from './MenuModal.styled';
import { useAuth } from '../../Providers/Auth';
import SessionDetailsContext from '../../context/session-details-context';

const MenuModal = () => {
  const sessionDetailsContext = useContext(SessionDetailsContext);
  const {
    sessionDetails: { id = '' },
    setSessionDetails,
  } = sessionDetailsContext;
  const { logout } = useAuth();
  const [authenticated, setAuthenticated] = useState(id);

  const logoutHandler = () => {
    logout();
    setSessionDetails({ id: '', name: '', avatarUrl: '' });
    setAuthenticated(false);
  };
  return (
    <MenuContainer>
      <NavItem>Home</NavItem>
      {authenticated ? (
        <>
          <NavItem>Favourites</NavItem>
          <NavItem onClick={logoutHandler}>Logout</NavItem>
        </>
      ) : null}
    </MenuContainer>
  );
};

export default MenuModal;
