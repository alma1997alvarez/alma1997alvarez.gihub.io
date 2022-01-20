import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Providers/Auth';
import { AUTH_SESSION_DETAILS } from '../../utils/constants';
import { LoginInput } from './Login.styled';
import loginApi from './Login.api';
import Heading from '../../components/Heading';
import Button from '../../components/Button/Button.component';
import SessionDetailsContext from '../../context/session-details-context';

function LoginPage() {
  const sessionDetailsContext = useContext(SessionDetailsContext);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  async function authenticate(event) {
    try {
      event.preventDefault();
      const sessionDetails = await loginApi(
        event.target.username.value,
        event.target.password.value
      );
      sessionDetailsContext.setSessionDetails(sessionDetails);
      login();
      localStorage.setItem(
        AUTH_SESSION_DETAILS,
        JSON.stringify(sessionDetails)
      );
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  }

  const typingHandler = () => {
    if (error.length > 0) {
      setError('');
    }
  };

  return (
    <section className="login">
      <Heading title="Welcome back!" />
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>Username: </strong>
            <LoginInput
              required
              type="text"
              id="username"
              name="username"
              onChange={typingHandler}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>Password: </strong>
            <LoginInput
              required
              type="password"
              id="password"
              name="password"
              onChange={typingHandler}
            />
          </label>
        </div>
        <p>{error}</p>
        <Button type="submit">Login</Button>
      </form>
    </section>
  );
}

export default LoginPage;
