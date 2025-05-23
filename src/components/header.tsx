import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { UserNameContext } from '@/core/context/username.provider';
import { Image } from '@/components/image';
import LogoLemoncode from '@/assets/logo-lemoncode.png';
import { routes } from '@/core/router/routes';

export const Header: React.FC = () => {
  const { name } = React.useContext(UserNameContext);
  return (
    <header className={classes.header}>
      <Link to={routes.root}>
        <Image
          src={LogoLemoncode}
          alt="Logo Lemoncode"
          classname="logo-lemoncode"
        />
      </Link>
      <h2>{name} </h2>
    </header>
  );
};
