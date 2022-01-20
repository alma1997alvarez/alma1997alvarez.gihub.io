import styled from 'styled-components';

const LoginInput = styled.input`
  margin: 0.5rem;
  border: none;
  background-color: #f3f0f8;
  line-height: 2rem;
  font-family: Poppins, sans-serif;
  width: 45vw;
  max-width: 400px;
  font-weight: 300;
  border-radius: 4px;
  padding: 0 10px;

  &:focus {
    outline: none;
  }
`;

export { LoginInput };
