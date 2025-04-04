import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pages/login';
import { OrgsPage } from '@/pages/organisation';
import { DetailPage } from '@/pages/detail-organisation';
import { routes } from '@/core/router';
import { SelectPage } from '@/pages/select';
import { MembersListProvider } from '@/core/context';
import { RickAndMorty } from '@/pages/rickandmorty';
import { DetailCharacter } from '@/pages/detail-rickandmorty';
import { CharacterListProvider } from '@/core/context/character.provider';

export const RouterApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.root} element={<LoginPage />} />
        <Route path={routes.select} element={<SelectPage />} />
        <Route
          path={routes.organisation}
          element={
            <MembersListProvider>
              <OrgsPage />
            </MembersListProvider>
          }
        />
        <Route
          path={routes.rickandmorty}
          element={
            <CharacterListProvider>
              <RickAndMorty />
            </CharacterListProvider>
          }
        />
        <Route path={routes.detail} element={<DetailPage />} />
        <Route path={routes.detailCharacter} element={<DetailCharacter />} />
      </Routes>
    </Router>
  );
};
