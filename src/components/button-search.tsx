import React from 'react';
import classes from './button-search.module.css';

interface Props {
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classname: string;
}

export const ButtonSearch: React.FC<Props> = (props) => {
  const { onclick, classname } = props;
  return (
    <button
      className={`${classname} ${classes.buttonSearch}`}
      onClick={onclick}
    >
      Search
    </button>
  );
};
