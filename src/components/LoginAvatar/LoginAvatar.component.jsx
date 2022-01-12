import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import defaultAvatar from '../../assets/defaultavatar.jpeg';

const AvatarImg = styled.img`
  width: 40px;
  border-radius: 20px;
  margin: 1rem;

  @media (max-width: 715px) {
    display: none;
  }
`;

const LoginAvatar = (props) => {
  return (
    <AvatarImg
      src={props.avatarUrl ? props.avatarUrl : defaultAvatar}
      alt="logged in user image"
    ></AvatarImg>
  );
};

export default LoginAvatar;
