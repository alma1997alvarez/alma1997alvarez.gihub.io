import VideosContainer from './VideosContainer.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('VideosContainer component', () => {
  it('should be rendered as a div', () => {
    //Arrange
    render(<VideosContainer />);
    const VideosContainerElement = screen.getByTestId(
      'videos-container-component'
    );

    //Act

    //Assert
    expect(VideosContainerElement).toBeInTheDocument();
  });
});
