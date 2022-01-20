import App from '.';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../context/theme-context';

const customRender = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('App component', () => {
  it('should render Header>Searchbar element ', () => {
    //Arrange
    customRender(<App />);
    const AppElement = screen.getByPlaceholderText('Search something...');

    //Act

    //Assert
    expect(AppElement).toBeInTheDocument();
  });
});
