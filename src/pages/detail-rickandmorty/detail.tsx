import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { emptyDetailCharacter } from '@/api/api.rickandmorty';
import { CharacterVm } from '@/pages/character.vm';
import { routes } from '@/core/router';
import classes from '@/pages/detail-organisation/detail.module.css';
import classStyleMain from '@/styles.css';
import { LayoutInnerPage } from '@/components/layout/layout-inner-page';
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
    <LayoutInnerPage>
      <div className={classes.layoutMember}>
        <div className={classes.backPage}>
          <Link to={routes.rickandmorty} className={classStyleMain.backPage}>
            Back to list page
          </Link>
        </div>
        <h1>Character detail</h1>
        <Card
          key={character.id}
          sx={{
            borderRadius: '8px',
            padding: '16px',
            width: 'min(350px, 100%)',
            textAlign: 'center',
            margin: '60px 0 0 0',
          }}
          className={`${character.status === 'Alive' ? classes.alive : null} ${
            character.status === 'Dead' ? classes.dead : null
          } ${character.status === 'unknown' ? classes.unknown : null}`}
        >
          <h2>{character.name}</h2>
          <h3>{character.gender}</h3>
          <CardContent sx={{ textAlign: 'center' }}>
            <CardMedia
              sx={{ borderRadius: '8px' }}
              component="img"
              image={character.image}
            ></CardMedia>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
          </CardContent>
        </Card>
      </div>
    </LayoutInnerPage>
  );
};
