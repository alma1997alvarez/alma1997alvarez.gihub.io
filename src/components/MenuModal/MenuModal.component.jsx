import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { MenuContainer, NavItem } from './MenuModal.styled';
import { useAuth } from '../../Providers/Auth';
import { AUTH_SESSION_DETAILS, AUTH_STORAGE_KEY } from '../../utils/constants';
import Button from '../Button/Button.component';
import SessionDetailsContext from '../../context/session-details-context';

const MenuModal = () => {
  const history = useHistory();
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
    localStorage.removeItem(AUTH_SESSION_DETAILS);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuthenticated(false);
    history.push('/');
  };
  return (
    <MenuContainer>
      <NavItem>
        <Link to="/"> Home</Link>
      </NavItem>
      {authenticated ? (
        <>
          <NavItem>
            <Link to="/favourites">Favourites</Link>
          </NavItem>
          <NavItem onClick={logoutHandler}>
            <Button>Logout</Button>
          </NavItem>
        </>
      ) : null}
    </MenuContainer>
  );
};

export default MenuModal;
