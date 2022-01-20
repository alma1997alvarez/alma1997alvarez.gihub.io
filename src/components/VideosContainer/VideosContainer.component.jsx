import React, { useContext } from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { VideosContainerStyled } from './VideosContainer.styled';
import useFetchYoutubeVideos from '../../hooks/useFetchYoutubeVideos';
import usePopulateVideoCards from '../../hooks/usePopulateVideoCards';
import SearchContext from '../../context/search-context';
import Heading from '../Heading';

const VideosContainer = () => {
  const searchContext = useContext(SearchContext);

  const videosList = useFetchYoutubeVideos({
    queryString: searchContext.searchQuery,
    related: false,
  });

  const videoCards = usePopulateVideoCards(videosList);

  return (
    <>
      <Heading title="Welcome to the challenge!" />
      <VideosContainerStyled data-testid="videos-container-component">
        {videoCards}
      </VideosContainerStyled>
    </>
  );
};

export default VideosContainer;
