import React from 'react';
import { CharacterVm } from '@/pages/character.vm';
import { emptyCharacterMapper } from '@/api/api.rickandmorty';
import { apiResponseCharacters } from '@/api/api.rickandmorty';
import { mapApiCharactersResponseToCharacterVm } from '@/pages/character.mapper';

interface CharacterContextType {
  characters: CharacterVm[];
  apiDefaultValue: string;
  setApiDefaultValue: (value: string) => void;
  page: string;
  setPage: (value: string) => void;
}

export const CharacterListContext = React.createContext<CharacterContextType>({
  characters: emptyCharacterMapper(),
  apiDefaultValue: '',
  setApiDefaultValue: () => {},
  page: '',
  setPage: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const CharacterListProvider: React.FC<Props> = (props) => {
  const { children } = props;
  // const inputDefaultValue: string = '';
  const [apiDefaultValue, setApiDefaultValue] = React.useState('');
  const [characters, setCharacters] = React.useState<CharacterVm[]>(
    emptyCharacterMapper()
  );
  const [page, setPage] = React.useState('1');
  console.warn(page);

  React.useEffect(() => {
    apiResponseCharacters(page, apiDefaultValue).then((data) =>
      setCharacters(mapApiCharactersResponseToCharacterVm(data))
    );
    apiResponseCharacters(page, apiDefaultValue).then((data) =>
      console.log(data)
    );
  }, [page, apiDefaultValue]);

  return (
    <CharacterListContext.Provider
      value={{
        characters,
        apiDefaultValue,
        setApiDefaultValue,
        page,
        setPage,
      }}
    >
      {children}
    </CharacterListContext.Provider>
  );
};
