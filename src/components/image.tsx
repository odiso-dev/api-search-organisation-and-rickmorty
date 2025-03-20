import React from 'react';

interface Props {
  src: string;
  alt: string;
  classname?: string;
}

export const Image: React.FC<Props> = (props) => {
  const { src, alt, classname } = props;
  return <img src={src} alt={alt} className={classname} />;
};
