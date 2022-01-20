import React from 'react';
import VideoCard from '../../components/VideoCard';
import Heading from '../../components/Heading';
import { VideosContainerStyled } from '../../components/VideosContainer/VideosContainer.styled';

const FavouriteVideosView = () => {
  const favouriteVideos = JSON.parse(
    localStorage.getItem('favourites_object') || '{}'
  );

  return (
    <>
      <Heading title="These are your favourite videos!" />
      <VideosContainerStyled>
        {Object.entries(favouriteVideos).map(([id, video]) => {
          return (
            <VideoCard
              imgsrc={video.imgsrc}
              title={video.title}
              description={video.description}
              id={id}
              key={`${id}`}
            ></VideoCard>
          );
        })}
      </VideosContainerStyled>
    </>
  );
};

export default FavouriteVideosView;
