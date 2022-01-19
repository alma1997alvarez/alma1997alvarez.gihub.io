import React, { useContext } from 'react';
import CurrentVideoContext from '../../context/current-video-context';
import {
  VideoDetailsIframe,
  VideoDetailsCardStyled,
} from './VideoDetailsCard.styled';

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
    </VideoDetailsCardStyled>
  );
};

export default VideoDetailsCard;
