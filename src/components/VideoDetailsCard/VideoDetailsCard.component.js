import React, { useContext, useState, useEffect } from 'react';
import CurrentVideoContext from '../../context/current-video-context';
import {
  VideoDetailsIframe,
  VideoDetailsCardStyled,
} from './VideoDetailsCard.styled';
import Button from '../Button/Button.component';
import isFavourite from '../../utils/isFavourite';

const VideoDetailsCard = ({ videoId }) => {
  const currentVideoContext = useContext(CurrentVideoContext);
  const { videoDetails: { title = '', description = '', imgsrc = '' } = {} } =
    currentVideoContext;

  const isFaved = isFavourite(videoId);
  console.log('isFaved', isFaved);

  const [favStatus, setFavStatus] = useState(isFaved);
  console.log('favStatus', favStatus);

  // TODO: check with John whether this is implemented correctly.
  useEffect(() => {
    setFavStatus(isFaved);
  });

  const addToFavourites = () => {
    const oldFavourites = JSON.parse(
      localStorage.getItem('favourites_object') || '{}'
    );

    const newFavourites = {
      ...oldFavourites,
      [videoId]: { imgsrc: imgsrc, title: title, description: description },
    };

    localStorage.setItem('favourites_object', JSON.stringify(newFavourites));

    setFavStatus(true);
  };

  const removeFromFavourites = () => {
    const oldFavourites = JSON.parse(
      localStorage.getItem('favourites_object') || '{}'
    );

    delete oldFavourites[videoId];

    localStorage.setItem('favourites_object', JSON.stringify(oldFavourites));

    setFavStatus(false);
  };

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
      {favStatus ? (
        <Button onClickFn={removeFromFavourites}>Remove from favourites</Button>
      ) : (
        <Button onClickFn={addToFavourites}>Add to favourites</Button>
      )}
    </VideoDetailsCardStyled>
  );
};

export default VideoDetailsCard;
