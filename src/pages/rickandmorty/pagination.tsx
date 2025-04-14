import React from 'react';
import classes from './pagination.module.css';

interface Props {
  onclickPrev: () => void;
  onclickNext: () => void;
}

export const Pagination: React.FC<Props> = (props) => {
  const { onclickPrev, onclickNext } = props;
  return (
    <div className={classes.flex}>
      <button onClick={onclickPrev}>Pre</button>
      <button onClick={onclickNext}>Next</button>
    </div>
  );
};
