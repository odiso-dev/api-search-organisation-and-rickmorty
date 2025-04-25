import React from 'react';
import { CharacterVm } from '@/pages/character.vm';
/* MUI */
import { Card, CardContent, CardMedia } from '@mui/material/';

interface Props {
  character: CharacterVm;
  classname: any;
}

export const CardCharacter: React.FC<Props> = (props) => {
  const { character, classname } = props;
  return (
    <Card
      sx={{ borderRadius: '8px', padding: '16px', scale: '.9' }}
      className={classname}
    >
      <h2>{character.name}</h2>
      <h3>{character.gender}</h3>
      <CardContent sx={{ textAlign: 'center' }}>
        <CardMedia component="img" image={character.image}></CardMedia>
        <h4>{character.status}</h4>
        <h4>{character.species}</h4>
      </CardContent>
    </Card>
  );
};
