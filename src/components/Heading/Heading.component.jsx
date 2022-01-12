import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const HeadingH1 = styled.h1`
  font-family: 'Montserrat', 'sans-serif';
  font-size: 2rem;
  font-weight: 700px;
  text-align: center;
  color: #242323;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

const Heading = (props) => {
  return <HeadingH1 role="heading">{props.title}</HeadingH1>;
};

export default Heading;
