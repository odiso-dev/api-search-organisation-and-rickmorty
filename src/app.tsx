import React from 'react';
import { RouterApp } from '@/core/router';
import { MembersProvider } from '@/core/context';

export const App = () => {
  return (
    <MembersProvider>
      <RouterApp />
    </MembersProvider>
  );
};
