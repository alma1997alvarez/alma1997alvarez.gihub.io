import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import VideoCard from '../VideoCard';

const VideosContainerStyled = styled.section`
  width: 90%;
  height: auto;
  margin: 2vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  //display: grid;
  //grid-template-columns: repeat(4, 1fr);
`;

const VideosContainer = ({ videos }) => {
  const videosArray = videos.items;
  return (
    <VideosContainerStyled>
      {videosArray.map((video) => {
        return (
          <VideoCard
            imgsrc={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            description={video.snippet.description}
            key={video.id.videoId}
          />
        );
      })}
    </VideosContainerStyled>
  );
};

export default VideosContainer;
