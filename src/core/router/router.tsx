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
import { LayoutPage } from '@/components/layout/layout-page';
import { UserNameProvider } from '@/core/context/username.provider';

export const RouterApp: React.FC = () => {
  return (
    <Router>
      <UserNameProvider>
        <LayoutPage>
          <MembersListProvider>
            <CharacterListProvider>
              <Routes>
                <Route path={routes.root} element={<LoginPage />} />
                <Route path={routes.select} element={<SelectPage />} />
                <Route path={routes.organisation} element={<OrgsPage />} />
                <Route path={routes.rickandmorty} element={<RickAndMorty />} />
                <Route path={routes.detail} element={<DetailPage />} />
                <Route
                  path={routes.detailCharacter}
                  element={<DetailCharacter />}
                />
              </Routes>
            </CharacterListProvider>
          </MembersListProvider>
        </LayoutPage>
      </UserNameProvider>
    </Router>
  );
};
