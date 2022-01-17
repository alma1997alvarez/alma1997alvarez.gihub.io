import VideoDetailsView from './VideoDetailsView.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('VideoDetailsView component', () => {
  it('should render the VideoDetailsView elemet', () => {
    //Arrange
    render(<VideoDetailsView />);
    const VideoDetailsElement = screen.getByTestId('video-details-view');

    //Act

    //Assert
    expect(VideoDetailsElement).toBeInTheDocument();
  });
});
