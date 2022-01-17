import React, { useContext } from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext } from '../../context/theme-context';
import {
  DarkModeBall,
  DarkModeLabel,
  DarkModeInput,
  DarkModeText,
  ToggleContainer,
} from './DarkModeToggle.styled';

const DarkModeToggle = () => {
  const theme = useContext(ThemeContext);
  const { state: { darkMode = false } = {}, dispatch = () => {} } = theme;

  const onClickHandler = () => {
    if (darkMode) {
      dispatch({ type: 'LIGHTMODE' });
    } else {
      dispatch({ type: 'DARKMODE' });
    }
  };

  return (
    <React.Fragment>
      <ToggleContainer>
        <DarkModeInput
          type="checkbox"
          id="darkmode"
          onClick={() => {
            onClickHandler();
          }}
        />
        <DarkModeLabel htmlFor="darkmode">
          <DarkModeBall />
        </DarkModeLabel>
      </ToggleContainer>
      <DarkModeText>{darkMode ? 'Go light' : 'Go dark'}</DarkModeText>
    </React.Fragment>
  );
};

export default DarkModeToggle;
