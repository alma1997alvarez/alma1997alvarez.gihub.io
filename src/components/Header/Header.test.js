import Header from './Header.component';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeProvider from '../../context/theme-context';

const customRender = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Header component', () => {
  it('should be displayed as a header element', () => {
    //Arrange
    customRender(<Header />);
    const HeaderElement = screen.getByRole('header');

    //Act

    //Assert
    expect(HeaderElement).toBeInTheDocument();
  });
});
