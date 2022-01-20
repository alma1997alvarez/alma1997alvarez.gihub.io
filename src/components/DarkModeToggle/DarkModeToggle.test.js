import DarkModeToggle from './DarkModeToggle.component';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../context/theme-context';

const customRender = (component) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('DarkModeToggle component', () => {
  it('should be displayed as a checkbox element', () => {
    //Arrange
    customRender(<DarkModeToggle />);
    const DarkModeToggleElement = screen.getByRole('checkbox');

    //Act

    //Assert
    expect(DarkModeToggleElement).toBeInTheDocument();
  });
});
