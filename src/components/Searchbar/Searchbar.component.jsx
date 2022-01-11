import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
const SearchbarInput = styled.input`
  font-family: 'Poppins';
  background: #b0a2c7;
  padding: 0.25em 1em;
  height: 3vh;
  min-height: 30px;
  min-width: 400px;
  width: 20vw;
  border-radius: 0.5em;
  border: none;
  transition: background-color 0.5s ease;

  &:hover {
    background: #e7e1f1;
    transition: background-color 0.5s ease;
  }

  &:focus {
    outline: none;
  }
`;

const Searchbar = () => {
  return (
    <React.Fragment>
      <SearchbarInput type="search" placeholder="Search something..." />
    </React.Fragment>
  );
};

export default Searchbar;
