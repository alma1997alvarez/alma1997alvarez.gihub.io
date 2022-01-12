import Searchbar from './Searchbar.component';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';

describe('Searchbar component', () => {
  it('should be displayed as an input element with Search something... as placeholder text', () => {
    //Arrange
    render(<Searchbar />);
    const searchbarElement = screen.getByPlaceholderText('Search something...');

    //Act

    //Assert
    expect(searchbarElement).toBeInTheDocument();
  });
});
