import * as apiCharacterModel from '@/api/api.rickandmorty.model';
import * as characterVm from '@/pages/character.vm';

export const mapApiCharactersResponseToCharacterVm = (
  apiCharacter: apiCharacterModel.ApiCharacterResponse
): characterVm.CharacterVm[] =>
  apiCharacter?.results.map((result) => ({
    id: result.id,
    name: result.name,
    status: result.status,
    species: result.species,
    gender: result.gender,
    image: result.image,
  }));
