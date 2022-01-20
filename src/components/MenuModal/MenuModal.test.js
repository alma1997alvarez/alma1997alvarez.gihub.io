import MenuModal from '.';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthProvider from '../../Providers/Auth';

describe('MenuModal component', () => {
  it('should display at least the Home nav link', () => {
    //Arrange
    render(
      <AuthProvider>
        <Router>
          <MenuModal />
        </Router>
      </AuthProvider>
    );
    const menuElement = screen.getByText('Home');

    //Act

    //Assert
    expect(menuElement).toBeInTheDocument();
  });
});
