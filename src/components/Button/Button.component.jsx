import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ onClickFn, children }) => {
  return <StyledButton onClick={onClickFn}>{children}</StyledButton>;
};

export default Button;
