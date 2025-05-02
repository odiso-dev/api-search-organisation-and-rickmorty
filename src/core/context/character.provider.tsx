import React /* , { Dispatch, SetStateAction } */ from 'react';

import { CharacterVm } from '@/pages/character.vm';
import {
  emptyCharacterMapper,
  /* apiResponseCharacters, */
  /* emptyPagination, */
  /* apiNextPage, */
} from '@/api/api.rickandmorty';
import { mapApiCharactersResponseToCharacterVm } from '@/pages/character.mapper';
// import { mapApiCharactersResponseToPaginationVM } from '@/pages/pagination.mapper';
// import { PaginationVm } from '@/pages/pagination.vm';

interface Info {
  count: number;
  pages: number;
  prev: string | null;
}

interface CharacterContextType {
  characters: CharacterVm[];
  apiDefaultValue: string;
  setApiDefaultValue: (value: string) => void;
  nextPage: string | null;
  prevPage: string | null;
  setNextPage: (value: string) => void;
  setPrevPage: (value: string) => void;
  info: any;
  urlApiBase: string;
  setUrlApiBase: (value: string) => void;
  // setUrlApiBase: (value: string | ((prevValue: string) => string)) => void;
  countPrevPage: number | null;
  countNextPage: number | null;
  setCountPrevPage: (
    value: number | ((prevValue: number | null) => number)
  ) => void;
  setCountNextPage: (
    value: number | ((prevValue: number | null) => number)
  ) => void;
}

export const CharacterListContext = React.createContext<CharacterContextType>({
  characters: emptyCharacterMapper(),
  apiDefaultValue: '',
  setApiDefaultValue: () => {},
  nextPage: '',
  prevPage: '',
  setNextPage: () => {},
  setPrevPage: () => {},
  info: {},
  urlApiBase: '',
  setUrlApiBase: () => {},
  countPrevPage: 0,
  setCountPrevPage: () => {},
  countNextPage: 0,
  setCountNextPage: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const CharacterListProvider: React.FC<Props> = (props) => {
  const { children } = props;

  const [apiDefaultValue, setApiDefaultValue] = React.useState('');
  const [characters, setCharacters] = React.useState<CharacterVm[]>(
    emptyCharacterMapper()
  );
  const [prevPage, setPrevPage] = React.useState<string | null>(null);
  const [nextPage, setNextPage] = React.useState<string | null>(null);
  const [countPrevPage, setCountPrevPage] = React.useState<number | null>(1);
  const [countNextPage, setCountNextPage] = React.useState<number | null>(0);
  const [info, setInfo] = React.useState<Info | null>(null);
  const [urlApiBase, setUrlApiBase] = React.useState(
    `https://rickandmortyapi.com/api/character/?page=1&name=${apiDefaultValue}`
  );

  React.useEffect(() => {
    /* apiResponseCharacters(apiDefaultValue).then((data) => {
      setInfo(data?.info || null);
      setCharacters(mapApiCharactersResponseToCharacterVm(data));
      setNextPage(data?.info?.next || null);
      setPrevPage(data?.info?.prev || null);
    }); */

    fetch(urlApiBase)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data?.info || null);
        setCharacters(mapApiCharactersResponseToCharacterVm(data));
        setNextPage(data?.info?.next || null);
        setPrevPage(data?.info?.prev || null);

        setCountNextPage(data?.info?.pages ?? 1);
      });
  }, [urlApiBase, apiDefaultValue]);

  return (
    <CharacterListContext.Provider
      value={{
        characters,
        apiDefaultValue,
        setApiDefaultValue,
        nextPage,
        prevPage,
        setNextPage,
        setPrevPage,
        info,
        urlApiBase,
        setUrlApiBase,
        countPrevPage,
        setCountPrevPage,
        countNextPage,
        setCountNextPage,
      }}
    >
      {children}
    </CharacterListContext.Provider>
  );
};
