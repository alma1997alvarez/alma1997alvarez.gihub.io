import React from 'react';
import VideoDetailsCard from '../VideoDetailsCard';
import VideoRecommendationsList from '../VideoRecomendationsList';
import { VideoDetailsViewStyled } from './VideoDetailsView.styled';

const VideoDetailsView = () => {
  return (
    <VideoDetailsViewStyled data-testid="video-details-view">
      <VideoDetailsCard />
      <VideoRecommendationsList />
    </VideoDetailsViewStyled>
  );
};

export default VideoDetailsView;
