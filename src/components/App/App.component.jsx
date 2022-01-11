import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import styled, { css } from 'styled-components';
import videos from '../../mockvideos/youtube-mock-videos.json';

// import AuthProvider from '../../providers/Auth';
// import HomePage from '../../pages/Home';
// import LoginPage from '../../pages/Login';
// import NotFound from '../../pages/NotFound';
// import Private from '../Private';
// import Fortune from '../Fortune';
// import Layout from '../Layout';
// import { random } from '../../utils/fns';
import MainHeader from '../Header';
import Heading from '../Heading';
import MainContainer from '../MainContainer';
import VideosContainer from '../VideosContainer';

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
// `;

function App() {
  const videosArray = videos.items;
  return (
    <React.Fragment>
      <MainHeader />
      <MainContainer>
        <Heading title="Welcome to the challenge!"></Heading>
        <VideosContainer videos={videosArray} />
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
