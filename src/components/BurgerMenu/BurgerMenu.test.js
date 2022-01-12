import BurgerMenu from './BurgerMenu.component';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';

describe('BurgerMenu component', () => {
  it('should be rendered as a div with title burger-menu-container', () => {
    //Arrange
    render(<BurgerMenu />);
    const menuElement = screen.getByTitle('burger-menu-container');

    //Act

    //Assert
    expect(menuElement).toBeInTheDocument();
  });
});
