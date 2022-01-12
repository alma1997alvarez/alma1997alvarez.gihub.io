import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import styled, { css } from 'styled-components';
import videos from '../../mockvideos/youtube-mock-videos.json';

import MainHeader from '../Header';
import Heading from '../Heading';
import MainContainer from '../MainContainer';
import VideosContainer from '../VideosContainer';

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
