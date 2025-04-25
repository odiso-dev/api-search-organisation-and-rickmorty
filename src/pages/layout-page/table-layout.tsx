import React from 'react';
import classes from './table-layout.module.css';

interface Props {
  children: React.ReactNode;
  classname?: string;
}

export const LayoutPage: React.FC<Props> = (props) => {
  const { children, classname } = props;
  return (
    <div
      className={`${classes.layoutPage} ${classname} ${classes.rickandmorty}`}
    >
      {children}
    </div>
  );
};
