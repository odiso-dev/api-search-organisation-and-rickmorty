import React from 'react';
import classes from './button-search.module.css';

interface Props {
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classname?: string;
  children: React.ReactNode;
}

export const ButtonSearch: React.FC<Props> = (props) => {
  const { onclick, classname, children } = props;
  return (
    <button
      className={`${classname} ${classes.buttonSearch}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};
