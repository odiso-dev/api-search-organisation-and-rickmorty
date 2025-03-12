import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './login.module.css';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('admin');
  const [password, setPassword] = React.useState('test');

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test') {
      navigate('/list');
    } else {
      alert('User / password not valid, psst... admin / test');
    }
  };

  return (
    <div className={classes.wrapperForm}>
      <form className={classes.form} onSubmit={handleNavigation}>
        <h2>Access</h2>
        <div className={classes.flex}>
          <div>
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
