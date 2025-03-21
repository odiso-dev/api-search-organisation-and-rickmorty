import React from 'react';
import { RouterApp } from '@/core/router';

const OrgsApp: React.FC = () => {
  return <RouterApp />;
};

export const App = () => {
  return (
    <OrgsApp />
    // <RickMortyApp/>
  );
};
