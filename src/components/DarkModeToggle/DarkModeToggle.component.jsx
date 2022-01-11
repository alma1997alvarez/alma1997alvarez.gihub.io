import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

//Most of the below styling for the toggle was obtained from https://codepen.io/PaulinaSurazynska/pen/bGVpBOb, modified to fit with this project

const ToggleContainer = styled.div`
  margin: 0 1rem;
  cursor: pointer;
`;

const DarkModeInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + label div {
    transform: translateX(15px);
  }
  &:checked + label {
    background-color: #79708a;
    transition: background-color 0.5s ease;
  }
`;

const DarkModeLabel = styled.label`
  width: 25px;
  height: 10px;
  background-color: #9c90b1;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
  transition: background-color 0.5s ease;
`;

const DarkModeBall = styled.div`
  width: 14px;
  height: 14px;
  background-color: #715694;
  position: absolute;
  top: -2px;
  left: -2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  cursor: pointer;
`;

const DarkModeToggle = () => {
  return (
    <ToggleContainer>
      <DarkModeInput type="checkbox" id="darkmode" />
      <DarkModeLabel htmlFor="darkmode">
        <DarkModeBall />
      </DarkModeLabel>
    </ToggleContainer>
  );
};

export default DarkModeToggle;
