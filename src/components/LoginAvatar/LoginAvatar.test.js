import LoginAvatar from './LoginAvatar.component';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

describe('LoginAvatar component', () => {
    it('should be displayed as an image', () => {
        //Arrange
        render(<LoginAvatar/>);
        const avatarImageElement = screen.getByRole('img');
        
        //Act
        
        //Assert
        expect(avatarImageElement).toBeInTheDocument();
    })

    it('should show the passed image url as src attr of the element', () => {
        //Arrange
        render(<LoginAvatar avatarUrl="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"/>);
        const avatarImageElement = screen.getByRole('img');
        
        //Act

        //Assert
        expect(avatarImageElement).toBeInTheDocument();
    })
})

