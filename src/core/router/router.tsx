import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/login';
import { ListPage } from '@/pages/list';
import { DetailPage } from '@/pages/detail';
import { routes } from '@/core/router';
import { SelectPage } from '@/pages/select';
import { MembersProvider } from '@/core/context';
import { RickAndMorty } from '@/pages/rickandmorty';

export const RouterApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.root} element={<LoginPage />} />
        <Route path={routes.select} element={<SelectPage />} />
        <Route
          path={routes.organisation}
          element={
            <MembersProvider>
              <ListPage />
            </MembersProvider>
          }
        />
        <Route path={routes.rickandmorty} element={<RickAndMorty />} />
        <Route path={routes.detail} element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
