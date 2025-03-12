import React from 'react';
import classes from './input-organisation.module.css';

interface Props {
  onchange: () => void;
  placeholder: string;
}

export const InputSearch: React.FC<Props> = (props) => {
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
