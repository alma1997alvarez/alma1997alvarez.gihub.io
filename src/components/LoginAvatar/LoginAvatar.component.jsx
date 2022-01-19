import React from 'react';
import { useHistory } from 'react-router-dom';
import defaultAvatar from '../../assets/defaultavatar.jpeg';
import { AvatarImg } from './LoginAvatar.styled';

const LoginAvatar = (props) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push('/login');
  };
  return (
    <AvatarImg
      src={props.avatarUrl ? props.avatarUrl : defaultAvatar}
      alt="logged in user image"
      onClick={clickHandler}
    ></AvatarImg>
  );
};

export default LoginAvatar;
