import FavouriteVideosView from './FavouriteVideosView.page';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('FavouriteVideosView page component', () => {
  it('should be rendered with a heading indicating the page content', () => {
    //Arrange
    render(<FavouriteVideosView />);
    const favVideosElement = screen.getByText(
      'These are your favourite videos!'
    );

    //Act

    //Assert
    expect(favVideosElement).toBeInTheDocument();
  });
});
