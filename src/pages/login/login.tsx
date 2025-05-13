import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './login.module.css';
import { routes } from '@/core/router';
import { UserNameContext } from '@/core/context/username.provider';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const { setName } = React.useContext(UserNameContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    username !== '' ? navigate(routes.select) : alert('You must write a name');
  };
  const handlerUserName = () => setName(`Welcome ${username}`);

  return (
    <>
      <div className={classes.wrapperForm}>
        <form className={classes.form} onSubmit={handleNavigation}>
          <h2>Access</h2>
          <div className={classes.flex}>
            <div>
              <label>User name: </label>
              <input
                ref={inputRef}
                value={username}
                placeholder="Lemoncode"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <button type="submit" onClick={handlerUserName}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
