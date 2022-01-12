import DarkModeToggle from './DarkModeToggle.component';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';

describe('DarkModeToggle component', () => {
  it('should be displayed as a checkbox element', () => {
    //Arrange
    render(<DarkModeToggle />);
    const DarkModeToggleElement = screen.getByRole('checkbox');

    //Act

    //Assert
    expect(DarkModeToggleElement).toBeInTheDocument();
  });
});
