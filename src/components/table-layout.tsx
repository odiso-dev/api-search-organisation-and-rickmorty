import React from 'react';
import classes from './table-layout.module.css';

interface Props {
  children: React.ReactNode;
}

export const TableLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className={classes.tableLayout}>{children}</div>;
};
