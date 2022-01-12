import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const BurgerContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 35px;
  margin-right: 0.25rem;

  @media (max-width: 630px) {
    width: 10vw;
  }
`;

const BurgerLine = styled.div`
  width: 33px;
  height: 3px;
  background-color: #3a3642;
  margin: 3px 0;
`;

const BurgerMenu = () => {
  return (
    <React.Fragment>
      <BurgerContainer>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </BurgerContainer>
    </React.Fragment>
  );
};

export default BurgerMenu;
