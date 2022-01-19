import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Providers/Auth';
import loginApi from './Login.api';
import Heading from '../../components/Heading';

function LoginPage() {
  const { login } = useAuth();
  //const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    const attemptedLogin = loginApi(
      event.target.username.value,
      event.target.password.value
    );
    console.log(attemptedLogin);
    login();
  }

  return (
    <section className="login">
      <Heading title="Welcome back!" />
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" name="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" name="password" />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
