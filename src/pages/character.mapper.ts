import * as apiCharacterModel from '@/api/api.rickandmorty.model';
import * as characterVm from '@/pages/character.vm';

export const mapApiCharacterToCharacterVm = (
  apiCharacter: apiCharacterModel.characterEntity[]
): characterVm.CharacterVm[] =>
  apiCharacter.map((character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    image: character.image,
  }));
