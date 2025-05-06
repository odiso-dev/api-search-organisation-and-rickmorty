import React from 'react';
import { CharacterVm } from '@/pages/character.vm';
/* MUI */
import { Card, CardContent, CardMedia } from '@mui/material/';

interface Props {
  character: CharacterVm;
  classname: string;
}

export const CardCharacter: React.FC<Props> = (props) => {
  const { character, classname } = props;
  return (
    <Card
      sx={{
        borderRadius: '8px',
        padding: '16px',
        scale: '.9',
      }}
      className={classname}
    >
      <h2 style={{ width: '24ch' }}>{character.name}</h2>
      <h3>{character.gender}</h3>
      <CardContent>
        <CardMedia
          sx={{ borderRadius: '8px' }}
          component="img"
          image={character.image}
        ></CardMedia>
      </CardContent>
      <h4>{character.status}</h4>
      <h4>{character.species}</h4>
    </Card>
  );
};
