import App from '.';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('App component', () => {
  it('should render Header>Searchbar element ', () => {
    //Arrange
    render(<App />);
    const AppElement = screen.getByPlaceholderText('Search');

    //Act

    //Assert
    expect(AppElement).toBeInTheDocument();
  });
});
