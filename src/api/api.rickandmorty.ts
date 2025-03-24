import { characterEntity } from './api.rickandmorty.model';

export const apiCharacters = (urlApiBase): Promise<characterEntity[]> => {
  try {
    return fetch(urlApiBase).then((response) => response.json());
  } catch (error) {
    throw new Error(`** Failed conection API ${error} **`);
  }
};

export const emptyCharacter = (): characterEntity[] => ({
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
