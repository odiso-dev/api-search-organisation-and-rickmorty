import React from 'react';
import classes from './input-organisation.module.css';

interface Props {
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
  click: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const InputSearch: React.FC<Props> = (props) => {
  const { onchange, placeholder, inputRef, click } = props;
  return (
    <input
      className={classes.inputSearch}
      onChange={onchange}
      type="text"
      placeholder={placeholder}
      ref={inputRef}
      onClick={click}
    />
  );
};
