import React from 'react';
import classes from './footer.module.css';

/* interface Props {
  children: React.ReactNode;
  classname?: string;
} */

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <h2>Developed with React, Typescript, Vite and MUI</h2>
    </footer>
  );
};
