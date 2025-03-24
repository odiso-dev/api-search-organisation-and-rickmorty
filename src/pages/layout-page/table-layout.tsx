import React from 'react';
import classes from './table-layout.module.css';

interface Props {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className={classes.layoutPage}>{children}</div>;
};
