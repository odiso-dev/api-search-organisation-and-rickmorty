import urlApi from '@/env-rickandmorty';
import { ApiCharacterResponse } from './api.rickandmorty.model';
import { CharacterVm } from '@/pages/character.vm';
import { PaginationVm } from '@/pages/pagination.vm';

export const apiResponseCharacters = (
  nameCharacter: string = ''
): Promise<ApiCharacterResponse> => {
  try {
    const constructedUrl = `${urlApi}${nameCharacter}`;

    return fetch(constructedUrl)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    throw new Error(`** Failed conection to API ${error} **`);
  }
};

export const apiNextPage = (nextPage) => {
  return fetch(nextPage)
    .then((response) => response.json())
    .then((data) => data);
};

export const emptyCharacterMapper = (): CharacterVm[] => [
  {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  },
];

export const emptyDetailCharacter = (): CharacterVm => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
});

export const emptyApiResponse = (): ApiCharacterResponse => ({
  info: {
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  },
  results: [
    {
      id: 0,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: [''],
      url: '',
      created: '',
    },
  ],
});

export const emptyPagination = (): PaginationVm => ({
  pages: 0,
  next: '',
  prev: '',
});
