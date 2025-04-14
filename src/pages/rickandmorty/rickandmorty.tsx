import { ButtonSearch } from '@/components/button-search';
import { CardCharacter } from '@/components/detail-character';
import { InputSearch } from '@/components/input-organisation';
import { CharacterListContext } from '@/core/context/character.provider';
import { routes } from '@/core/router';
import { debounce } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutPage } from '../layout-page/table-layout';
import classes from './rickandmorty.module.css';
import { Pagination } from './pagination';
/* MUI */
import { Grid } from '@mui/material/';

export const RickAndMorty: React.FC = () => {
  const { characters, apiDefaultValue, setApiDefaultValue, page, setPage } =
    React.useContext(CharacterListContext);

  const [inputValue, setInputValue] = React.useState(apiDefaultValue);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    1000
  );
  // console.warn(`page=> ${page}`);
  const handleButtonSearch = () => {
    setApiDefaultValue(inputValue.trim().toLowerCase());
  };

  const handlerPrevPage = () => {
    let number = parseInt(page);
    number -= 1;
    setPage(number.toString());
  };

  const handlerNextPage = () => {
    let number = parseInt(page);
    number += 1;
    setPage(number.toString());
  };

  React.useEffect(() => {
    setInputValue(apiDefaultValue);
  }, [page, apiDefaultValue]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <LayoutPage>
      <Link to={routes.select}>Back to select</Link>
      <h1>Filter by character name</h1>
      <div>
        <form className={classes.searchItems}>
          <InputSearch
            onchange={handleInputSearch}
            placeholder={inputValue}
            inputRef={inputRef}
          />
          <ButtonSearch onclick={handleButtonSearch} />
        </form>
      </div>
      <Grid
        container
        spacing={3}
        className={classes.gridContent}
        sx={{ gap: '50px', marginTop: 'auto' }}
      >
        {characters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <CardCharacter character={character} />
          </Link>
        ))}
      </Grid>
      <Pagination onclickPrev={handlerPrevPage} onclickNext={handlerNextPage} />
    </LayoutPage>
  );
};
