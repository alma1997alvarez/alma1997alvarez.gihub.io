import React from 'react';
//import { useHistory } from 'react-router-dom';
import { MenuContainer, NavItem } from './MenuModal.styled';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { useAuth } from '../../Providers/Auth';

const MenuModal = () => {
  const { logout } = useAuth();
  const authenticated = localStorage.getItem(AUTH_STORAGE_KEY);

  const logoutHandler = () => {
    logout();
    console.log(authenticated);
  };
  return (
    <MenuContainer>
      <NavItem>Home</NavItem>
      <NavItem>Favourites</NavItem>
      <NavItem onClick={logoutHandler}>Logout</NavItem>
    </MenuContainer>
  );
};

export default MenuModal;
