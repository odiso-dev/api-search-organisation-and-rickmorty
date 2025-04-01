import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutPage } from '../layout-page/table-layout';
import { apiCharacters } from '@/api/api.rickandmorty';
import { emptyCharacterMapper } from '@/api/api.rickandmorty';
import { mapApiCharacterToCharacterVm } from '@/pages/character.mapper';
import classes from './rickandmorty.module.css';
import { InputSearch } from '@/components/input-organisation';
import { ButtonSearch } from '@/components/button-search';
import { debounce } from 'lodash';
import { routes } from '@/core/router';
/* MUI */
import { Grid, Card, CardContent, CardMedia } from '@mui/material/';

export const RickAndMorty: React.FC = () => {
  const [characters, setCharacters] = React.useState(emptyCharacterMapper());
  const [inputValue, setInputValue] = React.useState('character');
  const [fetchCurrentValue, setFetchCurrentValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    1000
  );

  const handleButtonSearch = () => {
    console.log(inputValue);
    setFetchCurrentValue(inputValue);
  };

  React.useEffect(() => {
    apiCharacters(`?name=${fetchCurrentValue}`).then((data) =>
      setCharacters(mapApiCharacterToCharacterVm(data))
    );

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [fetchCurrentValue]);

  return (
    <LayoutPage>
      <Link to={routes.select}>Back to select</Link>
      <h1>Filter by character name</h1>
      <div className={classes.searchItems}>
        {
          <InputSearch
            onchange={handleInputSearch}
            placeholder={inputValue}
            inputRef={inputRef}
          />
        }
        {<ButtonSearch onclick={handleButtonSearch} />}
      </div>
      <Grid container spacing={3} sx={{ gap: '50px', marginTop: 'auto' }}>
        {characters.map((character) => (
          <Link to={`/character/${character.id}`}>
            <Card
              key={character.id}
              sx={{ borderRadius: '8px', padding: '16px' }}
            >
              <h3>{character.name}</h3>
              <h4>{character.gender}</h4>
              <CardContent sx={{ textAlign: 'center' }}>
                <CardMedia component="img" image={character.image}></CardMedia>
                <p>{character.status}</p>
                <p>{character.species}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
    </LayoutPage>
  );
};
