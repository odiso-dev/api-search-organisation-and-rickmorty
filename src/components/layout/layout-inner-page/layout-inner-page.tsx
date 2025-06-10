import React from 'react';
import classes from './layout-inner-page.module.css';

interface Props {
  children: React.ReactNode;
  classname?: string;
}

export const LayoutInnerPage: React.FC<Props> = (props) => {
  const { children, classname } = props;
  return (
    <div
      className={`${classes.layoutInnerPage} ${classname} rickandmorty organisation`}
    >
      {children}
    </div>
  );
};
