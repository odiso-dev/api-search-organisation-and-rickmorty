import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { emptyDetailCharacter } from '@/api/api.rickandmorty';
import { CharacterVm } from '@/pages/character.vm';
import { routes } from '@/core/router';
import classes from '@/pages/detail-organisation/detail.module.css';
/* MUI */
import { Card, CardContent, CardMedia } from '@mui/material/';

export const DetailCharacter: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState<CharacterVm>(
    emptyDetailCharacter()
  );

  React.useEffect(() => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data));
    } catch (error) {
      throw new Error(`** Failed conection API ${error} **`);
    }
  }, [id]);

  return (
    <div className={classes.layoutMember}>
      <div className={classes.backPage}>
        <Link to={routes.rickandmorty}>Back to list page</Link>
      </div>
      <h1>Character detail</h1>
      <Card
        key={character.id}
        sx={{ borderRadius: '8px', padding: '16px', width: 'min(350px, 100%)' }}
      >
        <h3>{character.name}</h3>
        <h4>{character.gender}</h4>
        <CardContent sx={{ textAlign: 'center' }}>
          <CardMedia component="img" image={character.image}></CardMedia>
          <p>{character.status}</p>
          <p>{character.species}</p>
        </CardContent>
      </Card>
    </div>
  );
};
