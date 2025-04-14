import { ApiCharacterResponse } from './api.rickandmorty.model';
import { CharacterVm } from '@/pages/character.vm';
import urlApi from '@/env-rickandmorty';

export const apiResponseCharacters = (
  numberPage: string,
  nameCharacter: string
): Promise<ApiCharacterResponse> => {
  try {
    //const old = `${urlApi}?page=${numberPage}&${nameCharacter}`
    const constructedUrl = `${urlApi}?page=${numberPage}&name=${nameCharacter}`;
    return fetch(constructedUrl)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    throw new Error(`** Failed conection API ${error} **`);
  }
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

export const emptyApiResponseCharacters = (): ApiCharacterResponse => ({
  /* id: 0,
  name: 'string',
  status: 'string',
  species: 'string',
  type: 'string',
  gender: 'string',
  origin: {
    name: 'string',
    url: 'string',
  },
  location: {
    name: 'string',
    url: 'string',
  },
  image: 'string',
  episode: [''],
  url: 'string',
  created: 'string', */

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
