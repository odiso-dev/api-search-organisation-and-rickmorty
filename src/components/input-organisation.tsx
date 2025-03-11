import React from 'react';
import classes from './input-organisation.module.css';

interface Props {
  onchange: () => void;
}

export const InputSearch: React.FC<Porps> = (props) => {
  const { onchange, placeholder } = props;
  return (
    <input
      className={classes.inputSearch}
      onChange={onchange}
      type="text"
      placeholder={placeholder}
    />
  );
};
