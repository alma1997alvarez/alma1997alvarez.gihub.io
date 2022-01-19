import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Providers/Auth';
import loginApi from './Login.api';
import Heading from '../../components/Heading';
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
            <strong>username </strong>
            <input
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
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              name="password"
              onChange={typingHandler}
            />
          </label>
        </div>
        <p>{error}</p>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
