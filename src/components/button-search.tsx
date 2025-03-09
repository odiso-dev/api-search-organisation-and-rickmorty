import React from 'react';

interface Props {
  onclick: () => void;
}

export const ButtonSearch: React.FC<Props> = (props) => {
  const { onclick } = props;
  return <button onClick={onclick}>Search</button>;
};
