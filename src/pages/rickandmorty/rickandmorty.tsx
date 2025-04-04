import { ButtonSearch } from '@/components/button-search';
import { InputSearch } from '@/components/input-organisation';
import { CharacterListContext } from '@/core/context/character.provider';
import { routes } from '@/core/router';
import { debounce } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutPage } from '../layout-page/table-layout';
import classes from './rickandmorty.module.css';
/* MUI */
import { CardCharacter } from '@/components/card-character';
import { Grid } from '@mui/material/';

export const RickAndMorty: React.FC = () => {
  const { characters, apiDefaultValue, setApiDefaultValue } =
    React.useContext(CharacterListContext);
  const [inputValue, setInputValue] = React.useState(apiDefaultValue);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    1000
  );

  const handleButtonSearch = () => {
    setApiDefaultValue(inputValue);
  };

  React.useEffect(() => {
    setInputValue(apiDefaultValue);
  }, [apiDefaultValue]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
          <Link to={`/character/${character.id}`} key={character.id}>
            <CardCharacter character={character} />
          </Link>
        ))}
      </Grid>
    </LayoutPage>
  );
};
