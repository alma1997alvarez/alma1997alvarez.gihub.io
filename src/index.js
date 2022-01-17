import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import { ThemeProvider } from './context/theme-context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
