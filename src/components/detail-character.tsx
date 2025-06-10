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
        textAlign: 'center',
      }}
      className={classname}
    >
      <h2 style={{ width: '20ch' }}>{character.name}</h2>
      <h3>{character.gender}</h3>
      <CardContent sx={{ padding: '0' }}>
        <CardMedia
          sx={{
            borderRadius: '8px',
          }}
          component="img"
          image={character.image}
        ></CardMedia>
      </CardContent>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
    </Card>
  );
};
