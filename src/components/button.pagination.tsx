import React from 'react';

interface Props {
  onclickPrev?: () => void;
  onclickNext?: () => void;
  classname: string;
  isDisabled: boolean;
  children: React.ReactNode;
}

export const BtnPagination: React.FC<Props> = (props) => {
  const { onclickPrev, onclickNext, isDisabled, classname, children } = props;
  return (
    <button
      className={classname}
      disabled={isDisabled}
      onClick={onclickPrev || onclickNext}
    >
      {children}
    </button>
  );
};
