import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/hrader';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then(() => console.log('로그'));
  };

  return (
    <section>
      <Header />
      <section className={styles.login}>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
