import Button from './Button.component';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
  it('should be rendered with the button role', () => {
    //Arrange
    render(<Button />);
    const buttonElement = screen.getByRole('button');

    //Act

    //Assert
    expect(buttonElement).toBeInTheDocument();
  });
});
