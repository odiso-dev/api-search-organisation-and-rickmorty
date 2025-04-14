import { CharacterVm } from '@/pages/character.vm';
import React from 'react';
/* MUI */
import { Card, CardContent, CardMedia } from '@mui/material/';

interface Props {
  character: CharacterVm;
}

export const CardCharacter: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <Card sx={{ borderRadius: '8px', padding: '16px' }}>
      <h3>{character.name}</h3>
      <h4>{character.gender}</h4>
      <CardContent sx={{ textAlign: 'center' }}>
        <CardMedia component="img" image={character.image}></CardMedia>
        <p>{character.status}</p>
        <p>{character.species}</p>
      </CardContent>
    </Card>
  );
};
