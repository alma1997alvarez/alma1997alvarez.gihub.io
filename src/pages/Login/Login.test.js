import Login from './Login.page';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../../Providers/Auth';

describe('Login page component', () => {
  it('should be rendered with a heading indicating the page content', () => {
    //Arrange
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    const favVideosElement = screen.getByText('Welcome back!');

    //Act

    //Assert
    expect(favVideosElement).toBeInTheDocument();
  });
});
