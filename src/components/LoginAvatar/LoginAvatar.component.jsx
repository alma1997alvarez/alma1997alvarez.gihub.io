import React from 'react';
import { useHistory } from 'react-router-dom';
import defaultAvatar from '../../assets/defaultavatar.jpeg';
import { AvatarImg } from './LoginAvatar.styled';

const LoginAvatar = ({ avatarUrl = '', name = '' }) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push('/login');
  };
  console.log(avatarUrl);
  return (
    <AvatarImg
      src={avatarUrl ? avatarUrl : defaultAvatar}
      alt="logged in user image"
      onClick={clickHandler}
      title={name ? `${name} logged in` : 'not logged in'}
    ></AvatarImg>
  );
};

export default LoginAvatar;
