import React from 'react';
import VideoCard from '../../components/VideoCard';
import Heading from '../../components/Heading';

const FavouriteVideosView = () => {
  const favouriteVideos = JSON.parse(
    localStorage.getItem('favourites_object') || '{}'
  );

  return (
    <>
      <Heading title="These are your favourite videos!" />
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
    </>
  );
};

export default FavouriteVideosView;
