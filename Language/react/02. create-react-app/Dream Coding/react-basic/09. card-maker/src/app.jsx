import React from 'react';
import './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login authService={authService} />}
          />
          <Route
            path="/maker"
            render={() => <Maker authService={authService} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
