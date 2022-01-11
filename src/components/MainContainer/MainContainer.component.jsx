import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const MainContainerStyled = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = (props) => {
  return <MainContainerStyled>{props.children}</MainContainerStyled>;
};

export default MainContainer;
