import React from 'react';
import classes from './header.module.css';
import { UserNameContext } from '@/core/context/username.provider';

/* interface Props {
  children: React.ReactNode;
  classname?: string;
} */

export const Header: React.FC = () => {
  const { name } = React.useContext(UserNameContext);
  return (
    <header className={classes.header}>
      <h2>Header</h2>
      <h2>{name} </h2>
    </header>
  );
};
