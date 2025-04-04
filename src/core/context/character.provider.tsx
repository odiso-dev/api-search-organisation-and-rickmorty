import React from 'react';
import { CharacterVm } from '@/pages/character.vm';
import { emptyCharacterMapper } from '@/api/api.rickandmorty';
import { apiCharacters } from '@/api/api.rickandmorty';
import { mapApiCharacterToCharacterVm } from '@/pages/character.mapper';

interface CharacterContextType {
  characters: CharacterVm[];
  apiDefaultValue: string;
  setApiDefaultValue: (value: string) => void;
}

export const CharacterListContext = React.createContext<CharacterContextType>({
  characters: emptyCharacterMapper(),
  apiDefaultValue: '',
  setApiDefaultValue: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const CharacterListProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const inputDefaultValue: string = 'character';
  const [apiDefaultValue, setApiDefaultValue] = React.useState('');
  const [characters, setCharacters] = React.useState<CharacterVm[]>(
    emptyCharacterMapper()
  );

  React.useEffect(() => {
    apiCharacters(`${inputDefaultValue}?name=${apiDefaultValue}`).then((data) =>
      setCharacters(mapApiCharacterToCharacterVm(data))
    );
  }, [apiDefaultValue]);

  return (
    <CharacterListContext.Provider
      value={{
        characters,
        apiDefaultValue,
        setApiDefaultValue,
      }}
    >
      {children}
    </CharacterListContext.Provider>
  );
};
