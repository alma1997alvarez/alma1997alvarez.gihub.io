import VideoDetailsView from './VideoDetailsView.component';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('VideoDetailsView component', () => {
  jest.mock('react-router-dom', () => {
    return {
      useParams: () => ({
        id: '123',
      }),
    };
  });

  it('should render the VideoDetailsView elemet', () => {
    //Arrange
    render(
      <BrowserRouter>
        <VideoDetailsView />
      </BrowserRouter>
    );
    const VideoDetailsElement = screen.getByTestId('video-details-view');

    //Act

    //Assert
    expect(VideoDetailsElement).toBeInTheDocument();
  });
});
