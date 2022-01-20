import React from 'react';
import VideoDetailsCard from '../VideoDetailsCard';
import VideoRecommendationsList from '../VideoRecomendationsList';
import { VideoDetailsViewStyled } from './VideoDetailsView.styled';
import { useParams } from 'react-router-dom';

const VideoDetailsView = () => {
  const { videoId } = useParams();
  return (
    <VideoDetailsViewStyled data-testid="video-details-view">
      <VideoDetailsCard videoId={videoId} />
      <VideoRecommendationsList />
    </VideoDetailsViewStyled>
  );
};

export default VideoDetailsView;
