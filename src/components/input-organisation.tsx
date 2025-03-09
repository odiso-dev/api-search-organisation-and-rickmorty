import React from 'react';

interface Props {
  onchange: () => void;
}

export const InputSearch: React.FC<Porps> = (props) => {
  const { onchange } = props;
  return <input onChange={onchange} type="text" placeholder="organistaion" />;
};
