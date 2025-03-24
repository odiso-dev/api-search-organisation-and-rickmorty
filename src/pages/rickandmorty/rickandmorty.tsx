import React from 'react';
import urlApi from '@/env-rickandmorty';
import { LayoutPage } from '../layout-page/table-layout';
import { apiCharacters } from '@/api/api.rickandmorty';
import { emptyCharacter } from '@/api/api.rickandmorty';

export const RickAndMorty: React.FC = () => {
  const [characters, setCharacters] = React.useState(emptyCharacter());
  React.useEffect(() => {
    apiCharacters(urlApi).then((data) => setCharacters(data?.results));
  }, []);

  return (
    <LayoutPage>
      <h2>Rick and Morty</h2>
      {
        <div>
          {characters.map((character) => {
            <div>{character.name}</div>;
          })}
        </div>
      }
    </LayoutPage>
  );
};
