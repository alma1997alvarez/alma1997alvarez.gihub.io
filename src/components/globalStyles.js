import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  article {
    background: ${({ theme }) => theme.articleBackground};
  }

  p {
    color: ${({ theme }) => theme.para};
  }

  button {
    background: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.text};
    border:none;
  }

  button:hover {
    background: ${({ theme }) => theme.buttonHoverBackground};
  }
  `;
