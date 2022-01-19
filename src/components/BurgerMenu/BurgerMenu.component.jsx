import React, { useState } from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BurgerContainer, BurgerLine } from './BurgerMenu.styled';
import MenuModal from '../MenuModal';

const BurgerMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const clickHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <BurgerContainer
        data-testid="burger-menu-container"
        onClick={clickHandler}
      >
        <BurgerLine data-testid="burger-line" />
        <BurgerLine data-testid="burger-line" />
        <BurgerLine data-testid="burger-line" />
      </BurgerContainer>
      {showModal && <MenuModal />}
    </>
  );
};

export default BurgerMenu;
