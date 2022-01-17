import VideoDetailsCard from './VideoDetailsCard.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('VideoDetailsCard component', () => {
  it('should render the iframe element', () => {
    //Arrange
    render(<VideoDetailsCard />);
    const VideoCardElement = screen.getByTitle('YouTube video player');

    //Act

    //Assert
    expect(VideoCardElement).toBeInTheDocument();
  });
});
