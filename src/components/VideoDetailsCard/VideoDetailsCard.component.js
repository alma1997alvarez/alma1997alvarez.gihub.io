import React, { useContext } from 'react';
import CurrentVideoContext from '../../context/current-video-context';
import {
  VideoDetailsIframe,
  VideoDetailsCardStyled,
} from './VideoDetailsCard.styled';
import Button from '../Button/Button.component';

const VideoDetailsCard = ({ videoId }) => {
  const currentVideoContext = useContext(CurrentVideoContext);
  const { videoDetails: { title = '', description = '' } = {} } =
    currentVideoContext;
  return (
    <VideoDetailsCardStyled>
      <VideoDetailsIframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></VideoDetailsIframe>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button>Add to favourites</Button>
    </VideoDetailsCardStyled>
  );
};

export default VideoDetailsCard;
