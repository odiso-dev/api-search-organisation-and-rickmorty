import { characterEntity } from './api.rickandmorty.model';
import { CharacterVm } from '@/pages/character.vm';
import urlApi from '@/env-rickandmorty';

export const apiCharacters = (nameCharacter): Promise<characterEntity[]> => {
  try {
    return fetch(`${urlApi}${nameCharacter}`)
      .then((response) => response.json())
      .then((data) => data?.results);
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

export const emptyCharacter = (): characterEntity => ({
  id: 0,
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
  created: 'string',
});
